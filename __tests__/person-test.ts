import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { IPersonResponse } from '../src/entities/IPerson';
import { IFullPersonResponse } from '../src/entities/IFullPerson';
import { UwPws, CertFetcherManager, IApiError } from '../src/index';

import config from './setup/config';
import { IPersonSearchOptions } from '../src/endpoints/person';
import { ISearchPersonResponse } from '../src/entities/ISearchPerson';

let fetcher: ICertFetcher;
let certData;
let uwPws: UwPws;

async function searchById(options: IPersonSearchOptions) {
  const result = await uwPws.person.search(options);

  if (result.result === 'success') {
    const searchResult = result.data as ISearchPersonResponse;
    return expect(searchResult.Persons.length).toBeGreaterThan(0);
  }
  if (result.result === 'failure') {
    const error = result.data as IApiError;
    return expect(error.description).toEqual('Unauthorized');
  }
  throw Error(JSON.stringify(result));
}

describe('Person', () => {
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
    it('should return a minimal person', async () => {
      const options = { id: 'testkj1' };

      const result = await uwPws.person.get(options);
      const person = result.data as IPersonResponse;
      expect(person.RegisteredName).toEqual('Helen Cleveland');
    });

    it('should return a full person', async () => {
      const options = {
        full: true,
        id: 'testkj1',
      };

      const result = await uwPws.person.get(options);
      const fullPerson = result.data as IFullPersonResponse;
      expect(fullPerson.PersonAffiliations.EmployeePersonAffiliation);
    });
  });

  describe('Searching by id', () => {
    it('should work with a regid', async () => searchById({ regId: '9136CCB8F66711D5BE060004AC494FFE' }));

    it('should work with a netid', async () => searchById({ uwNetId: 'javerage' }));

    it('should work with an employee id', async () => searchById({ employeeId: '000210620' }));

    it('should work with student number', async () => searchById({ studentNumber: '1313020' }));

    it('should work with system key', async () => searchById({ systemKey: '990003020' }));

    it('should work with development id', async () => searchById({ developmentId: '1' }));
  });

  async function searchByAffiliation(options) {
    const result = await uwPws.person.search(options);
    const searchResults = result.data as ISearchPersonResponse;
    expect(searchResults.Persons.length).toBeGreaterThan(0);
  }

  const person: Record<string, unknown> = {
    firstName: 'LISA',
    lastName: 'SIMPSON',
  };

  describe('Searching by affiliation', () => {
    it('should find a student', async () => {
      person.isStudent = true;
      return searchByAffiliation(person);
    });

    it('should find a staff', async () => {
      person.isStaff = true;
      return searchByAffiliation(person);
    });

    it('should find faculty', async () => {
      person.isFaculty = true;
      return searchByAffiliation(person);
    });

    it('should find an employee', async () => {
      person.isEmployee = true;
      return searchByAffiliation(person);
    });

    it('should find a member', async () => {
      person.isMember = true;
      return searchByAffiliation(person);
    });

    it('should find an alum', async () => {
      person.isAlum = true;
      return searchByAffiliation(person);
    });

    it('should find an affiliate', async () => {
      person.isAffiliate = true;
      return searchByAffiliation(person);
    });
  });

  describe('Searching by name', () => {
    it('should find a student', async () => {
      const anotherPerson = {
        firstName: 'BART',
        lastName: 'SIMPSON',
      };
      const result = await uwPws.person.search(anotherPerson);
      const searchResults = result.data as ISearchPersonResponse;
      expect(searchResults.Persons.length).toBeGreaterThan(0);
    });
  });
});
