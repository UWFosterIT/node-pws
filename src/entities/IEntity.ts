export interface IEntityResponse {
  EntityAffiliations: EntityAffiliations
  UWRegID: string
  PriorUWRegIDs: string[]
  UWNetID: string
  PriorUWNetIDs: string[]
  UIDNumber: string
  IsTestEntity: boolean
  DisplayName: string
  RepositoryTimeStamp: string
}

export interface EntityAffiliations {
  PersonURI: PersonUri
}

export interface PersonUri {
  Href: string
  UWRegID: string
  UWNetID: string
  DisplayName: string
  RegisteredName: string
}
