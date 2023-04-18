export interface IFullPersonResponse {
  PersonAffiliations: PersonAffiliations;
  UWNetID: string;
  PriorUWNetIDs: any[];
  UWRegID: string;
  PriorUWRegIDs: any[];
  DisplayName: string;
  UIDNumber: null;
  IsTestEntity: boolean;
  RegisteredName: string;
  RegisteredSurname: string;
  RegisteredFirstMiddleName: string;
  PreferredSurname: null;
  PreferredFirstName: null;
  PreferredMiddleName: null;
  Pronouns: null;
  EduPersonAffiliations: string[];
  WhitepagesPublish: boolean;
  RepositoryTimeStamp: string;
}

export interface PersonAffiliations {
  EmployeePersonAffiliation: EmployeePersonAffiliation;
}

export interface EmployeePersonAffiliation {
  EmployeeID: string;
  EmployeeAffiliationState: string;
  HomeDepartment: string | null;
  MailStop: string | null;
  EmployeeWhitePages: EmployeeWhitePages;
}

export interface EmployeeWhitePages {
  Name: string;
  PublishInDirectory: boolean;
  Phones: string[];
  EmailAddresses: string[];
  Positions: string[];
  Addresses: string[];
  VoiceMails: string[];
  TouchDials: string[];
  Faxes: string[];
  Mobiles: string[];
  Pagers: string[];
}
