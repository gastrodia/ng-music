import { Injectable } from '@angular/core';
import {ServicesModule} from "./services.module";
import {HttpClient} from "@angular/common/http";
import {MusicSheetItem} from "./types/sheet.types";
import {MusicItem, ToneQuality} from "./types/music.types";

// 歌曲
@Injectable({providedIn: ServicesModule})
export class MusicService {

  constructor(private http: HttpClient) { }

  getMusicPlayUrl(id: number | string, level: ToneQuality = 'standard') {
    return this.http.get<MusicItem>('/api/song/url/v1', {params: {id, level}})
  }
}
