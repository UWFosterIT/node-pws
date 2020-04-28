require('../setup');

describe('Entity', () => {
  beforeEach(async () => {
    await uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should get a person entity', async () => {
      const options = { id: 'ADA12DA10F7649B2A8861B14633F0A0A' };

      const result = await uwpws.entity.get(options);
      expect(result.data.DisplayName).to.equal('BART SIMPSON');
    });

    it('should get a non person entity', async () => {
      const options = { id: '24CB6CD8AE3511D68CBC0004AC494FFE' };

      const result = await uwpws.entity.get(options);
      expect(result.data.DisplayName).to.equal('UWIT Service Center');

      // Using Promises directly
      //
      // return uwpws.entity.get(options)
      //   .then((result) => {
      //     expect(result.entity.DisplayName).to.equal('UW IT SERVICE CENTER');
      //   });
    });
  });

  describe('Searching by name', () => {
    it('should page results', async () => {
      const options = {
        name: 'marc',
        size: 10,
        start: 2,
      };

      const result = await uwpws.entity.search(options);
      expect(result.data.Current.PageStart).to.equal('2');
      expect(result.data.Entities.length).to.equal(10);
    });

    it('should give test entities', async () => {
      const options = {
        isTest: 'on',
        name: 'bart',
      };

      const result = await uwpws.entity.search(options);
      expect(result.data.Entities.length).to.equal(10);
    });

    it('should exclude people', async () => {
      const options = {
        name: 'TEST NEWSTD',
        onlyEntities: 'on',
      };

      const result = await uwpws.entity.search(options);
      expect(result.data.Entities.length).to.equal(0);

      // now infer the opposite, which will include people
      options.onlyEntities = 'off';
      const list = await uwpws.entity.search(options);
      expect(list.data.Entities.length).to.equal(10);
    });
  });
});
