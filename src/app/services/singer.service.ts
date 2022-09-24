import {Injectable} from '@angular/core';
import {ServicesModule} from "./services.module";
import {SingerParams, SingerResponse} from "./types/singer.types";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'

@Injectable({providedIn: ServicesModule})
export class SingerService {

  /**
   * @description 歌手分类列表
   */
  getSingerList(params: Partial<SingerParams>) {
    const _params = Object.assign({
      limit: 30,
      offset: 1,
      type: '-1',
      area: '-1'
    }, params)
    return this.http.get<SingerResponse>('/api/artist/list', {params: _params}).pipe(map(v => v.artists))
  }

  constructor(private http: HttpClient) {
  }
}
