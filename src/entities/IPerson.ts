export interface IPersonResponse {
  PersonAffiliations: PersonAffiliations;
  UWNetID: string;
  PriorUWNetIDs: string[];
  UWRegID: string;
  PriorUWRegIDs: string[];
  DisplayName: string;
  UIDNumber: string;
  IsTestEntity: boolean;
  RegisteredName: string;
  RegisteredSurname: string;
  RegisteredFirstMiddleName: string;
  PreferredSurname: string;
  PreferredFirstName: string;
  PreferredMiddleName: string;
  Pronouns: string;
  EduPersonAffiliations: string[];
  WhitepagesPublish: boolean;
  RepositoryTimeStamp: string;
}

export interface PersonAffiliations {
  PersonFullURI: PersonFullURI;
}

export interface PersonFullURI {
  Href: string;
  UWRegID: string;
  UWNetID: string;
  DisplayName: string;
  RegisteredName: string;
}
