

export type SingerType = '-1' | '1' | '2' | '3'
export type SingerArea = '-1' | '7' | '96' | '8' | '16' | '0'

export interface SingerItem {
  albumSize: number
  alias: string[]
  briefDesc: string
  fansCount: number
  followed: false
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

export interface SingerParams {
  limit: number
  offset: number
  type: SingerType
  area: SingerArea
  initial: string
}

export interface SingerResponse {
  artists: SingerItem[]
  code: number
  more: boolean
}
