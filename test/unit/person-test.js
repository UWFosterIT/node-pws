import '../setup/';

describe('Person', function () {

  beforeEach(() => {
    uwpws.initialize(config);
  });

  describe('Get', () => {
    it('should return a minimal person', (done) => {
      let options = {
        id: 'testkj1'
      };

      uwpws.person.get(options, (err, response, result) => {
        expect(result.RegisteredName).to.equal('BART SIMPSON');
        done(err);
      });
    });

    it('should return a full person', (done) => {
      let options = {
        id:   'testkj1',
        full: true
      };

      uwpws.person.get(options, (err, response, result) => {
        expect(result.PersonAffiliations.EmployeePersonAffiliation)
          .to.not.be.null;
        done(err);
      });
    });
  });

  function searchById(options, done) {
    uwpws.person.search(options, (err, response, result) => {
      if (!result.StatusCode == 401) {
        // 401 is only when using development_id
        expect(result.Persons.length).to.be.above(0);
      }
      done(err);
    });
  }

  describe('Searching by id', () => {
    it('should work with a regid', (done) => {
      searchById({ regid: '9136CCB8F66711D5BE060004AC494FFE' }, done);
    });

    it('should work with a netid', (done) => {
      searchById({ netid: 'javerage' }, done);
    });

    it('should work with an employee id', (done) => {
      searchById({ employeeid: '000210620' }, done);
    });

    it('should work with student number', (done) => {
      searchById({ studentNumber: '1313020' }, done);
    });

    it('should work with system key', (done) => {
      searchById({ syskey: '990003020' }, done);
    });

    it('should work with development id', (done) => {
      searchById({ devid: '9999999001' }, done);
    });
  });

  function searchByAffiliation(options, done) {
    uwpws.person.search(options, (err, response, result) => {
      expect(result.Persons.length).to.be.above(0);
      done(err);
    });
  }

  describe('Searching by affiliation', () => {
    it('should find an employee', (done) => {
      searchByAffiliation({
        isEmployee: true,
        firstName:  'LISA',
        lastName:   'SIMPSON'
      }, done);
    });
  });
});
