let AWS = require('aws-sdk');
let Entity = require('./modules/entity');
let fs = require('fs');
let log4js = require('log4js');
let MicroCache = require('micro-cache');
let Person = require('./modules/person');
let util = require('util');

let FileCertificate = {
  readCertificate: async (opts) => {
    if (opts.cert === '' || opts.key === '' ||
      !fs.existsSync(opts.cert) || !fs.existsSync(opts.key)) {
      throw new Error(`Client cert '${opts.cert}' or key '${opts.key}' can not be found`);
    }

    return {
      cert:               fs.readFileSync(opts.cert),
      key:                fs.readFileSync(opts.key),
      rejectUnauthorized: false
    };
  }
};

let S3Certificate = {
  readCertificate: async (opts) => {
    let s3 = new AWS.S3();
    let cert = await s3.getObject({
      Bucket: opts.certBucket,
      Key:    opts.certKey
    }).promise().catch((err) => {
      throw Error('S3 get cert error', err);
    });
    let key = await s3.getObject({
      Bucket: opts.keyBucket,
      Key:    opts.keyKey
    }).promise().catch((err) => {
      throw Error('S3 get key error', err);
    });

    return {
      cert:               cert.Body,
      key:                key.Body,
      rejectUnauthorized: false
    };
  }
};

async function readCertificate(opts) {
  let certReader;

  switch (true) {

    case opts.hasOwnProperty('file'):
      certReader = Object.create(FileCertificate);
      opts = opts.file;
      break;

    case opts.hasOwnProperty('s3'):
      certReader = Object.create(S3Certificate);
      opts = opts.s3;
      break;

    default:
      throw Error('Certificate reader not supported');
  }

  return await certReader.readCertificate(opts);
}

let UWPWS = {
  async initialize(options) {
    let config = {...options};
    config.auth = await readCertificate(config.certInfo);

    log4js.configure({
      appenders: {
        out: {
          layout: {type: 'colored'},
          type:   'stdout',
        }
      },
      categories: {
        default: {
          appenders: ['out'],
          level:     process.env.LOG_LEVEL || config.logLevel || 'info'
        }
      }
    });

    config.log = log4js.getLogger();

    config.cache = new MicroCache(
      options.cachePath,
      options.logLevel,
      options.cacheExt
    );

    this.person = new Person(config);
    this.entity = new Entity(config);

    return this;
  }
};

module.exports = UWPWS;

process.on('unhandledRejection', (reason, p) => {
  console.error(`Promise: ${util.inspect(p)}\nReason: ${reason}`);
  process.exit(1);
});