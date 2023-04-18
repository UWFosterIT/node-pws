export interface ISearchEntityResponse {
  PageSize: string
  PageStart: string
  Entities: Entity[]
  Current: EntitySearchParams
  Next: EntitySearchParams | null
  Previous: EntitySearchParams | null
  TotalCount: number
}

export interface Entity {
  EntityURI: EntityUri
  Href: string
  UWNetID?: string
  DisplayName: string
}

export interface EntityUri {
  Href: string
  UWNetID?: string
  DisplayName: string
  UWRegID: string
}

export interface EntitySearchParams {
  DisplayName: string
  IsTestEntity: boolean
  OnlyEntities: boolean
  ChangedSinceDate: string
  PageStart: string
  PageSize: string
  UWNetID: string
  Href: string
}
