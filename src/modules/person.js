const qs = require('query-string');
const Service = require('./service');

class Person extends Service {
  get(opt) {
    let full = '';
    if (opt.full) {
      full = '/full';
    }

    return super.get(`person/${opt.id}${full}.json`);
  }

  search(opt) {
    const params = {
      /* eslint-disable camelcase */
      address: opt.address || '',
      changed_since_date: opt.changedSinceDate || '',
      department: opt.department || '',
      development_id: opt.devid || '',
      edupersonaffiliation_affiliate: opt.isAffiliate || '',
      edupersonaffiliation_alum: opt.isAlum || '',
      edupersonaffiliation_employee: opt.isEmployee || '',
      edupersonaffiliation_faculty: opt.isFaculty || '',
      edupersonaffiliation_member: opt.isMember || '',
      edupersonaffiliation_staff: opt.isStaff || '',
      edupersonaffiliation_student: opt.isStudent || '',
      email: opt.email || '',
      employee_id: opt.employeeid || '',
      first_name: opt.firstName || '',
      home_dept: opt.homeDept || '',
      last_name: opt.lastName || '',
      mail_stop: opt.mailStop || '',
      page_size: opt.size || '',
      page_start: opt.start || '',
      phone_number: opt.phoneNumber || '',
      student_number: opt.studentNumber || '',
      student_system_key: opt.syskey || '',
      title: opt.title || '',
      uwnetid: opt.netid || '',
      uwregid: opt.regid || '',
      verbose: opt.verbose || '',
      /* eslint-enable camelcase */
    };

    const query = qs.stringify(params);
    return super.get(`person.json?${query}`);
  }
}

module.exports = Person;
