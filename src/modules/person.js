import qs      from 'query-string';
import Service from './service';

class Person extends Service {
  constructor(config) {
    super(config);
  }

  get(opt, cb) {
    let full = '';
    if (opt.full) {
      full = '/full';
    }
    this._get(`person/${opt.id}${full}.json`, cb);
    return;
  }

  search(opt, cb) {
    let params = {
      development_id:                 opt.devid         || '',
      employee_id:                    opt.employeeid    || '',
      uwregid:                        opt.regid         || '',
      uwnetid:                        opt.netid         || '',
      student_number:                 opt.studentNumber || '',
      student_system_key:             opt.syskey        || 0,
      registered_surname:             opt.lastName      || '',
      registered_first_middle_name:   opt.firstName     || '',
      edupersonaffiliation_student:   opt.isStudent     || '',
      edupersonaffiliation_stff:      opt.isStaff       || '',
      edupersonaffiliation_faculty:   opt.isFaculty     || '',
      edupersonaffiliation_employee:  opt.isEmployee    || '',
      edupersonaffiliation_member:    opt.isMember      || '',
      edupersonaffiliation_alum:      opt.isAlum        || '',
      edupersonaffiliation_affiliate: opt.isAffiliate   || '',
      page_size:                      opt.size          || '',
      page_start:                     opt.start         || ''
    };

    let query = qs.stringify(params);

    this._get(`person.json?${query}`, cb);
    return;
  }
}

export default Person;
