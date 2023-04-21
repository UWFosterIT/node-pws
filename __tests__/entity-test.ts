import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { IEntityResponse } from '../src/entities/IEntity';
import { ISearchEntityResponse } from '../src/entities/ISearchEntity';
import { UwPws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwPws: UwPws;

describe('Entity', () => {
  beforeAll(async () => {
    const certFetcherManager = new CertFetcherManager();

    fetcher = certFetcherManager.getFetcher('s3');
    certData = await fetcher.readCertificate(config.certInfo);

    uwPws = new UwPws({
      organizationName: config.organizationName,
      baseUrl: config.baseUrl,
      certData,
      uwPwsLogLevel: config.uwPwsLogLevel,
    });
  });

  describe('Get', () => {
    it('should get a person entity', async () => {
      const options = { id: 'ADA12DA10F7649B2A8861B14633F0A0A' };

      const result = await uwPws.entity.get(options);
      const entity = result.data as IEntityResponse;
      expect(entity.DisplayName).toEqual('BART SIMPSON');
    });

    it('should get a non person entity', async () => {
      const options = { id: '24CB6CD8AE3511D68CBC0004AC494FFE' };

      const result = await uwPws.entity.get(options);
      const entity = result.data as IEntityResponse;
      expect(entity.DisplayName).toEqual('UWIT Service Center');
    });
  });

  describe('Searching by name', () => {
    it('should page results', async () => {
      const options = {
        name: 'marc',
        pageSize: '10',
        pageStart: '2',
      };

      const result = await uwPws.entity.search(options);
      const searchResults = result.data as ISearchEntityResponse;
      expect(searchResults.Current.PageStart).toEqual('2');
      expect(searchResults.Entities.length).toEqual(10);
    });

    it('should give test entities', async () => {
      const options = {
        isTest: 'on',
        name: 'bart',
      };

      const result = await uwPws.entity.search(options);
      const searchResults = result.data as ISearchEntityResponse;
      expect(searchResults.Entities.length).toEqual(10);
    });

    it('should exclude people', async () => {
      const options = {
        name: 'TEST NEWSTD',
        onlyEntities: 'on',
      };

      const result = await uwPws.entity.search(options);
      const searchResults = result.data as ISearchEntityResponse;
      expect(searchResults.Entities.length).toEqual(0);

      // now infer the opposite, which will include people
      options.onlyEntities = 'off';
      const list = await uwPws.entity.search(options);
      const listResults = list.data as ISearchEntityResponse;
      expect(listResults.Entities.length).toEqual(10);
    });
  });
});
