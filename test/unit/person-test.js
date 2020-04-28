require('../setup');

describe('Person', () => {
  beforeEach(async () => {
    await uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should return a minimal person', async () => {
      const options = { id: 'testkj1' };

      const result = await uwpws.person.get(options);
      expect(result.data.RegisteredName).to.equal('Helen Cleveland');
    });

    it('should return a full person', async () => {
      const options = {
        full: true,
        id: 'testkj1',
      };

      const result = await uwpws.person.get(options);
      expect(result.data.PersonAffiliations.EmployeePersonAffiliation);
    });
  });

  async function searchById(options) {
    const result = await uwpws.person.search(options);
    if (result.statusCode !== 401) {
      // 401 is only when using development_id
      return expect(result.data.Persons.length).to.be.above(0);
    }
    if (result.statusCode === 401) {
      return expect(result.message.StatusDescription).to.eq('Insufficient privileges for alum query');
    }
    throw Error(JSON.stringify(result));
  }

  describe('Searching by id', () => {
    it('should work with a regid', async () => searchById({ regid: '9136CCB8F66711D5BE060004AC494FFE' }));

    it('should work with a netid', async () => searchById({ netid: 'javerage' }));

    it('should work with an employee id', async () => searchById({ employeeid: '000210620' }));

    it('should work with student number', async () => searchById({ studentNumber: '1313020' }));

    it('should work with system key', async () => searchById({ syskey: '990003020' }));
  });

  async function searchByAffiliation(options) {
    const result = await uwpws.person.search(options);
    expect(result.data.Persons.length).to.be.above(0);
  }

  const person = {
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
      const result = await uwpws.person.search(anotherPerson);
      expect(result.data.Persons.length).to.be.above(0);
    });
  });
});
