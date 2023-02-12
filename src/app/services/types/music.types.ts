export type ToneQuality = 'standard' | 'higher' | 'exhigh' | 'lossless' | 'hires'

export interface MusicItem {
  id: number
  url: string
  time: number
  size: number
  level: ToneQuality
}
