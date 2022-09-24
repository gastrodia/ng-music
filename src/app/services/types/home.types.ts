export interface BannerItem {
  adDispatchJson: null
  adLocation: null
  adSource: null
  adid: null
  encodeId: string
  event: null
  exclusive: boolean
  extMonitor: null
  extMonitorInfo: null
  imageUrl: string
  monitorBlackList: null
  monitorClick: null
  monitorClickList: null
  monitorImpress: null
  monitorImpressList: null
  monitorType: null
  program: null
  scm: string
  song: null
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: null
  video: null
}

export interface BannerResponse {
  code: number,
  banners: BannerItem[]
}
