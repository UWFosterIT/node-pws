export interface ISearchPersonResponse {
  TotalCount: number;
  PageSize: string;
  PageStart: string;
  Persons: Person[];
  Current: PersonSearchParams;
  Next: PersonSearchParams | null;
  Previous: PersonSearchParams | null;
}

export interface PersonSearchParams {
  UWRegID: string | null;
  UWNetID: string | null;
  EmployeeID: string | null;
  StudentNumber: string | null;
  StudentSystemKey: string | null;
  DevelopmentID: string | null;
  LastName: string | null;
  FirstName: string | null;
  DisplayName: string | null;
  EduPersonAffiliationAffiliate: boolean | null;
  EduPersonAffiliationAlum: boolean | null;
  EduPersonAffiliationEmployee: boolean | null;
  EduPersonAffiliationFaculty: boolean | null;
  EduPersonAffiliationMember: boolean | null;
  EduPersonAffiliationStaff: boolean | null;
  EduPersonAffiliationStudent: boolean | null;
  ChangedSinceDate: string | null;
  PageStart: string | null;
  PhoneNumber: string | null;
  MailStop: string | null;
  HomeDepartment: string | null;
  Department: string | null;
  Address: string | null;
  Title: string | null;
  Email: string | null;
  AlumAffiliationState: string | null;
  EmployeeAffiliationState: string | null;
  StudentAffiliationState: string | null;
  Verbose: boolean | null;
  PageSize: string;
  Href: string;
}

export interface Person {
  Href: string;
  PersonURI: PersonURI;
  PersonFullURI: PersonURI;
}

export interface PersonURI {
  Href: string;
  UWRegID: string;
  UWNetID: null | string;
  DisplayName: string;
  RegisteredName: string;
}
