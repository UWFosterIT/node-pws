let qs      = require('query-string');
let Service = require('./service');

class Person extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    let full = '';
    if (opt.full) {
      full = '/full';
    }

    return this._get(`person/${opt.id}${full}.json`);
  }

  search(opt) {
    let params = {
      /* eslint-disable camelcase */
      address:                        opt.address          || '',
      changed_since_date:             opt.changedSinceDate || '',
      department:                     opt.department       || '',
      development_id:                 opt.devid            || '',
      edupersonaffiliation_affiliate: opt.isAffiliate      || '',
      edupersonaffiliation_alum:      opt.isAlum           || '',
      edupersonaffiliation_employee:  opt.isEmployee       || '',
      edupersonaffiliation_faculty:   opt.isFaculty        || '',
      edupersonaffiliation_member:    opt.isMember         || '',
      edupersonaffiliation_staff:     opt.isStaff          || '',
      edupersonaffiliation_student:   opt.isStudent        || '',
      email:                          opt.email            || '',
      employee_id:                    opt.employeeid       || '',
      first_name:                     opt.firstName        || '',
      home_dept:                      opt.homeDept         || '',
      last_name:                      opt.lastName         || '',
      mail_stop:                      opt.mailStop         || '',
      page_size:                      opt.size             || '',
      page_start:                     opt.start            || '',
      phone_number:                   opt.phoneNumber      || '',
      student_number:                 opt.studentNumber    || '',
      student_system_key:             opt.syskey           || '',
      title:                          opt.title            || '',
      uwnetid:                        opt.netid            || '',
      uwregid:                        opt.regid            || '',
      verbose:                        opt.verbose          || '',
      /* eslint-enable camelcase */
    };

    let query = qs.stringify(params);
    return this._get(`person.json?${query}`);
  }
}

module.exports = Person;
