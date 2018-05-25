require('../setup/');

describe('Person', function () {

  beforeEach(async () => {
    await uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should return a minimal person', async () => {
      let options = {id: 'testkj1'};

      let result = await uwpws.person.get(options);
      expect(result.data.RegisteredName).to.equal('Helen Cleveland');
    });

    it('should return a full person', async () => {
      let options = {
        full: true,
        id:   'testkj1',
      };

      let result = await uwpws.person.get(options);
      expect(result.data.PersonAffiliations.EmployeePersonAffiliation);
    });
  });

  async function searchById(options) {
    let result = await uwpws.person.search(options);
    if (result.statusCode != 401) {
      // 401 is only when using development_id
      return expect(result.data.Persons.length).to.be.above(0);
    }
    if (result.statusCode === 401) {
      return expect(result.message.StatusDescription).to.eq('Insufficient privileges for alum query');
    }
    throw Error(JSON.stringify(result));
  }

  describe('Searching by id', () => {
    it('should work with a regid', async function () {
      return await searchById({regid: '9136CCB8F66711D5BE060004AC494FFE'});
    });

    it('should work with a netid', async function () {
      return await searchById({netid: 'javerage'});
    });

    it('should work with an employee id', async function () {
      return await searchById({employeeid: '000210620'});
    });

    it('should work with student number', async function () {
      return await searchById({studentNumber: '1313020'});
    });

    it('should work with system key', async function () {
      return await searchById({syskey: '990003020'});
    });

    it('should work with development id', async function () {
      return await searchById({devid: '9999999001'});
    });
  });

  async function searchByAffiliation(options) {
    let result = await uwpws.person.search(options);
    expect(result.data.Persons.length).to.be.above(0);
  }

  let person = {
    firstName: 'LISA',
    lastName:  'SIMPSON'
  };

  describe('Searching by affiliation', () => {
    it('should find a student', async function () {
      person.isStudent = true;
      return await searchByAffiliation(person);
    });

    it('should find a staff', async function () {
      person.isStaff = true;
      return await searchByAffiliation(person);
    });

    it('should find faculty', async function () {
      person.isFaculty = true;
      return await searchByAffiliation(person);
    });

    it('should find an employee', async function () {
      person.isEmployee = true;
      return await searchByAffiliation(person);
    });

    it('should find a member', async function () {
      person.isMember = true;
      return await searchByAffiliation(person);
    });

    it('should find an alum', async function () {
      person.isAlum = true;
      return await searchByAffiliation(person);
    });

    it('should find an affiliate', async function () {
      person.isAffiliate = true;
      return await searchByAffiliation(person);
    });
  });

  describe('Searching by name', () => {
    it('should find a student', async () => {
      let person = {
        firstName: 'BART',
        lastName:  'SIMPSON'
      };
      let result = await uwpws.person.search(person);
      expect(result.data.Persons.length).to.be.above(0);
    });
  });
});
