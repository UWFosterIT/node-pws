import '../setup/';

describe('Entity', function () {

  beforeEach(() => {
    uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should get a person entity', (done) => {
      let options = {
        id: 'ADA12DA10F7649B2A8861B14633F0A0A'
      };

      uwpws.entity.get(options, (err, response, result) => {
        expect(result.DisplayName).to.equal('BART SIMPSON');
        done(err);
      });
    });

    it('should get a non person entity', (done) => {
      let options = {
        id: '24CB6CD8AE3511D68CBC0004AC494FFE'
      };

      uwpws.entity.get(options, (err, response, result) => {
        expect(result.DisplayName).to.equal('UW IT SERVICE CENTER');
        done(err);
      });
    });
  });

  describe('Searching by name', () => {
    it('should page results', (done) => {
      let options = {
        name:  'marc',
        size:  10,
        start: 2
      };
      uwpws.entity.search(options, (err, response, result) => {
        expect(result.Current.PageStart).to.equal('2');
        expect(result.Entities.length).to.equal(10);
        done(err);
      });
    });

    it('should give test entitties', (done) => {
      let options = {
        name:   'bart',
        isTest: 'on'
      };
      uwpws.entity.search(options, (err, response, result) => {
        expect(result.Entities.length).to.equal(10);
        done(err);
      });
    });

    it('should exlude people', (done) => {
      let options = {
        name:         'TEST NEWSTD',
        onlyEntities: 'on'
      };
      uwpws.entity.search(options, (err, response, result) => {
        expect(result.Entities.length).to.equal(0);

        // now infer the opposite, which will inlcude people
        options.onlyEntities = 'off';
        uwpws.entity.search(options, (err, response, result) => {
          expect(result.Entities.length).to.equal(10);
          done(err);
        });
      });
    });
  });
});
