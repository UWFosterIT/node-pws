require('../setup');

describe('Initializing the module', () => {
  it('should error when given missing cert or key', () => {
    const path = __dirname.replace('/unit', '/utils/');
    const certFile = `${path}dummy.crt`;

    const invalid = {
      both: {
        certInfo: {
          file: {
            cert: 'sup',
            key: 'nope',
          },
        },
      },
      cert: {
        certInfo: {
          file: {
            cert: '',
            key: 'sup',
          },
        },
      },
      key: {
        certInfo: {
          file: {
            cert: 'nope',
            key: '',
          },
        },
      },
      nothing: {
        certInfo: {
          file: {
            cert: '',
            key: '',
          },
        },
      },
      withCert: {
        certInfo: {
          cert: certFile,
          key: 'sup',
        },
      },
    };

    return Promise.all([
      expect(uwpws.initialize(invalid.key)).to.be.rejected,
      expect(uwpws.initialize(invalid.cert)).to.be.rejected,
      expect(uwpws.initialize(invalid.nothing)).to.be.rejected,
      expect(uwpws.initialize(invalid.withCert)).to.be.rejected,
      expect(uwpws.initialize(invalid.both)).to.be.rejected,
    ]);
  });
});

describe('Initializing the module with dummy certs', () => {
  it('should not error', async () => {
    const path = __dirname.replace('/unit', '/utils/');
    const valid = {
      certInfo: {
        file: {
          cert: `${path}/dummy.crt`,
          key: `${path}/dummy.key`,
        },
      },
    };

    return expect(uwpws.initialize(valid)).to.not.be.rejected.then((result) => {
      expect(result.person.config.auth.cert).to.not.be.undefined;
      expect(result.person.config.auth.key).to.not.be.undefined;
    });
  });
});
