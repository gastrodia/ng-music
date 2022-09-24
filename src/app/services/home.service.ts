import {Injectable} from '@angular/core';
import {ServicesModule} from './services.module'
import {HttpClient} from "@angular/common/http";
import { BannerResponse } from "./types/home.types";
import {map} from 'rxjs/operators'


@Injectable({providedIn: ServicesModule})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  /**
   * @description 获取轮播图
   */
  getBanners() {
    return this.http.get<BannerResponse>('/api/banner').pipe(map(v => v.banners))
  }
}
