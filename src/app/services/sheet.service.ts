import { Injectable } from '@angular/core';
import {ServicesModule} from "./services.module";
import {HttpClient} from "@angular/common/http";
import {MusicSheetItem} from "./types/sheet.types";

// 歌单

@Injectable({providedIn: ServicesModule})
export class SheetService {

  constructor(private http: HttpClient) { }

  getSongSheet(songId: number) {
    return this.http.get<MusicSheetItem>('/api/playlist/detail', {params: {id: songId}})
  }
}
