export type TLocation = {
  name: string
  url: string
}
export type TOrigin = {
  name: string
  url: string
}
export type TCharacter = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: TOrigin
  location: TLocation
  image: string
  episode: string[]
  url: string
  created: string
}

export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type TInfo = {
  count: number
  pages: number
}

export interface ICharacterSlice {
  items: TCharacter[]
  statusLoading: Status
  info: TInfo
}



export interface BaseResponse {
  info: TInfo
  results: TCharacter[]
}

export type TFetchCharactersArg = {
  search: string
  sortByStatus: string
  sortBySpecies: string
  sortByGender: string
  page: string
}
