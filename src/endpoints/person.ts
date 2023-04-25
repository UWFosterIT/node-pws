import Endpoint from '../core/endpoint.js';
import type { IFullPersonResponse } from '../entities/IFullPerson.js';
import type { IPersonResponse } from '../entities/IPerson.js';
import type { ISearchPersonResponse } from '../entities/ISearchPerson.js';

export interface IPersonGetOptions {
  id: string;
  full?: boolean;
}

export interface IPersonSearchOptions {
  address?: string;
  changedSinceDate?: string;
  department?: string;
  developmentId?: string;
  isAffiliate?: string;
  isAlum?: string;
  isEmployee?: string;
  isFaculty?: string;
  isMember?: string;
  isStaff?: string;
  isStudent?: string;
  email?: string;
  employeeId?: string;
  firstName?: string;
  homeDept?: string;
  lastName?: string;
  mailStop?: string;
  pageSize?: string;
  pageStart?: string;
  phoneNumber?: string;
  studentNumber?: string;
  systemKey?: string;
  title?: string;
  uwNetId?: string;
  regId?: string;
  verbose?: string;
}

type ResponseType<T> = T extends true ? IFullPersonResponse : IPersonResponse;

class Person extends Endpoint {
  async get(opt: IPersonGetOptions) {
    let full = '';
    if (opt.full) {
      full = '/full';
    }
    const result = await this.service.get<ResponseType<typeof opt.full>>(`person/${opt.id}${full}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async search(opt: IPersonSearchOptions) {
    const params = {
      address: opt.address || '',
      changed_since_date: opt.changedSinceDate || '',
      department: opt.department || '',
      development_id: opt.developmentId || '',
      edupersonaffiliation_affiliate: opt.isAffiliate || '',
      edupersonaffiliation_alum: opt.isAlum || '',
      edupersonaffiliation_employee: opt.isEmployee || '',
      edupersonaffiliation_faculty: opt.isFaculty || '',
      edupersonaffiliation_member: opt.isMember || '',
      edupersonaffiliation_staff: opt.isStaff || '',
      edupersonaffiliation_student: opt.isStudent || '',
      email: opt.email || '',
      employee_id: opt.employeeId || '',
      first_name: opt.firstName || '',
      home_dept: opt.homeDept || '',
      last_name: opt.lastName || '',
      mail_stop: opt.mailStop || '',
      page_size: opt.pageSize || '',
      page_start: opt.pageStart || '',
      phone_number: opt.phoneNumber || '',
      student_number: opt.studentNumber || '',
      student_system_key: opt.systemKey || '',
      title: opt.title || '',
      uwnetid: opt.uwNetId || '',
      uwregid: opt.regId || '',
      verbose: opt.verbose || '',
    };

    const query = new URLSearchParams(params);

    const result = await this.service.get<ISearchPersonResponse>(`person.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Person;
