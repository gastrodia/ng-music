interface HotPlayItemTag {
  category: number
  createTime: number
  highQuality: number
  highQualityPos: number
  id: number
  name: string
  officialPos: number
  position: number
  type: number
  usedCount: number
}

export interface HotPlayItem {
  activity: boolean
  category: number
  createTime: number
  hot: boolean
  id: number
  name: string
  playlistTag: HotPlayItemTag
  position: number
  type: number
  usedCount: number
}

export interface HotPlayListResponse {
  code: number
  tags: HotPlayItem[]
}

export interface SongSheetItem {
  alg: string
  canDislike: boolean
  copywriter: string
  highQuality: boolean
  id: number
  name: string
  picUrl: string
  playCount: number
  trackCount: number
  trackNumberUpdateTime: number
  type: number
}

export interface PersonalizedResponse {
  category: number
  code: number
  hasTaste: boolean
  result: SongSheetItem[]
}
