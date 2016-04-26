import '../setup/';

describe('Entity', function () {

  beforeEach(() => {
    uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should get a person entity', mochaAsync(async () => {
      let options = {
        id: 'ADA12DA10F7649B2A8861B14633F0A0A'
      };

      let result = await uwpws.entity.get(options);
      expect(result.data.DisplayName).to.equal('BART SIMPSON');
    }));

    it('should get a non person entity', mochaAsync(async () => {
      let options = {
        id: '24CB6CD8AE3511D68CBC0004AC494FFE'
      };

      let result = await uwpws.entity.get(options);
      expect(result.data.DisplayName).to.equal('UWIT Service Center');

      // Using Promises directly
      //
      // return uwpws.entity.get(options)
      //   .then((result) => {
      //     expect(result.entity.DisplayName).to.equal('UW IT SERVICE CENTER');
      //   });
    }));
  });

  describe('Searching by name', () => {
    it('should page results',  mochaAsync(async () => {
      let options = {
        name:  'marc',
        size:  10,
        start: 2
      };

      let result = await uwpws.entity.search(options);
      expect(result.data.Current.PageStart).to.equal('2');
      expect(result.data.Entities.length).to.equal(10);
    }));

    it('should give test entitties', mochaAsync(async () => {
      let options = {
        name:   'bart',
        isTest: 'on'
      };

      let result = await uwpws.entity.search(options);
      expect(result.data.Entities.length).to.equal(10);
    }));

    it('should exlude people', mochaAsync(async () => {
      let options = {
        name:         'TEST NEWSTD',
        onlyEntities: 'on'
      };

      let result = await uwpws.entity.search(options);
      expect(result.data.Entities.length).to.equal(0);

      // now infer the opposite, which will inlcude people
      options.onlyEntities = 'off';
      let list = await uwpws.entity.search(options);
      expect(list.data.Entities.length).to.equal(10);
    }));
  });
});
