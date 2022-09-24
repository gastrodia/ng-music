import { Injectable } from '@angular/core';
import {ServicesModule} from "./services.module";
import {HotPlayListResponse, PersonalizedResponse} from "./types/song.types";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'

@Injectable({providedIn: ServicesModule})
export class SongService {
  /**
   * @description 热门歌单
   */
  getHotPlayList() {
    return this.http.get<HotPlayListResponse>('/api/playlist/hot').pipe(map(v => v.tags))
  }

  /**
   * @description 推荐歌单
   */
  getPersonalized(limit: number = 16) {
    return this.http.get<PersonalizedResponse>('/api/personalized', {
      params: {limit}
    }).pipe(map(v => v.result))
  }

  constructor(private http: HttpClient) { }
}
