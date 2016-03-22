import '../setup/';

describe('Person', function () {

  beforeEach(() => {
    uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should return a minimal person', mochaAsync(async () => {
      let options = {
        id: 'testkj1'
      };

      let result = await uwpws.person.get(options);
      expect(result.data.RegisteredName).to.equal('BART SIMPSON');
    }));

    it('should return a full person', mochaAsync(async () => {
      let options = {
        id:   'testkj1',
        full: true
      };

      let result = await uwpws.person.get(options);
      expect(result.data.PersonAffiliations.EmployeePersonAffiliation);
    }));
  });

  async function searchById(options, done) {
    try {
      let result = await uwpws.person.search(options);
      if (!result.StatusCode == 401) {
        // 401 is only when using development_id
        expect(result.data.Persons.length).to.be.above(0);
      }
      done();
    } catch (error) {
      done(error);
    }
  }

  describe('Searching by id', () => {
    it('should work with a regid', async function(done) {
      searchById({ regid: '9136CCB8F66711D5BE060004AC494FFE' }, done);
    });

    it('should work with a netid', async function(done) {
      searchById({ netid: 'javerage' }, done);
    });

    it('should work with an employee id', async function(done) {
      searchById({ employeeid: '000210620' }, done);
    });

    it('should work with student number', async function(done) {
      searchById({ studentNumber: '1313020' }, done);
    });

    it('should work with system key', async function(done) {
      searchById({ syskey: '990003020' }, done);
    });

    it('should work with development id', async function(done) {
      searchById({ devid: '9999999001' }, done);
    });
  });

  async function searchByAffiliation(options, done) {
    try {
      let result = await uwpws.person.search(options);
      expect(result.data.Persons.length).to.be.above(0);
      done();
    } catch (error) {
      done(error);
    }
  }

  let lisa = {
    firstName: 'LISA',
    lastName:  'SIMPSON'
  };

  describe('Searching by affiliation', () => {
    it('should find a student', async function(done) {
      lisa.isStudent = true,
      searchByAffiliation(lisa, done);
    });

    it('should find a staff', async function(done) {
      lisa.isStaff = true,
      searchByAffiliation(lisa, done);
    });

    it('should find faculty', async function(done) {
      lisa.isFaculty = true,
      searchByAffiliation(lisa, done);
    });

    it('should find an employee', async function(done) {
      lisa.isEmployee = true,
      searchByAffiliation(lisa, done);
    });

    it('should find a member', async function(done) {
      lisa.isMember = true,
      searchByAffiliation(lisa, done);
    });

    it('should find an alum', async function(done) {
      lisa.isAlum = true,
      searchByAffiliation(lisa, done);
    });

    it('should find an affiliate', async function(done) {
      lisa.isAffiliate = true,
      searchByAffiliation(lisa, done);
    });
  });

  describe('Searching by name', () => {
    it('should find a student', mochaAsync(async () => {
      let lisa = {
        firstName: 'LISA',
        lastName:  'SIMPSON'
      };
      let result = await uwpws.person.search(lisa);
      expect(result.data.Persons.length).to.be.above(0);
    }));
  });
});
