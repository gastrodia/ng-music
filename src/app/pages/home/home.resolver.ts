import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { forkJoin } from 'rxjs';
import {HomeService} from "../../services/home.service";
import {SongService} from "../../services/song.service";
import {SingerService} from "../../services/singer.service";
import {SingerItem, SingerParams} from "../../services/types/singer.types";
import {BannerItem} from "../../services/types/home.types";
import {HotPlayItem, SongSheetItem} from "../../services/types/song.types";

export type HomeResolverData = [BannerItem[], HotPlayItem[], SongSheetItem[], SingerItem[]]

@Injectable()
export class HomeResolver implements Resolve<HomeResolverData> {
  constructor(
    private homeService: HomeService,
    private songService: SongService,
    private singerService: SingerService
  ) {}

  singerParams: Partial<SingerParams> = {
    limit: 20,
    offset: 1
  }

  resolve() {
    return forkJoin([
      this.homeService.getBanners(),
      this.songService.getHotPlayList(),
      this.songService.getPersonalized(36),
      this.singerService.getSingerList(this.singerParams)
    ])
  }
}
