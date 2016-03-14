import fs           from 'fs';
import winston      from 'winston';
import MicroCache   from 'micro-cache';
import Person       from './modules/person';
import Entity       from './modules/entity';

function readCertificate(cert = '', key = '') {
  if (cert === '' || key === '' ||
      !fs.existsSync(cert) || !fs.existsSync(key)) {
    throw new Error(`Client cert ${cert} or key ${key} can not be found`);
  }

  return {
    cert: fs.readFileSync(cert),
    key:  fs.readFileSync(key)
  };
}

let UWPWS = {
  initialize(options) {
    let config = options;
    config.auth = readCertificate(options.cert, options.key);

    winston.loggers.add('uwpws', {
      console: {
        colorize:    true,
        label:       'uwpws',
        level:       process.env.LOG_LEVEL || options.logLevel,
        prettyPrint: true
      }
    });

    config.log = winston.loggers.get('uwpws');
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
