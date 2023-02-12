interface MusicSheetPlayListTracksItem {
  id: number
  name: string
  url: string
  ar: { id: number, name: string, alias: string[] }[]
  al: {
    id: number
    name: string
    picUrl: string
  }
  dt: number
}

interface MusicSheetPlayList {
  id: number
  userId: number
  name: string
  coverImgUrl: string
  playCount: number
  tags: string[]
  createTime: number
  creator: {
    nickname: string
    avatarUrl: string
  }
  description: string
  subscribedCount: number
  shareCount: number
  commentCount: number
  subscribed: boolean
  tracks: MusicSheetPlayListTracksItem[]
  trackCount: number
}


export interface MusicSheetItem {
  code: number
  playlist: MusicSheetPlayList
}
