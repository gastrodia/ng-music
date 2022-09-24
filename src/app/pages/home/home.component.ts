import {Component, OnInit} from '@angular/core';
import {BannerItem} from "../../services/types/home.types";
import {HotPlayItem, SongSheetItem} from "../../services/types/song.types";
import {SingerItem} from "../../services/types/singer.types";
import {ActivatedRoute} from "@angular/router";
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: BannerItem[] = []
  hotPlayList: HotPlayItem[] = []
  songSheet: SongSheetItem[] = []
  singerList: SingerItem[] = []

  constructor(private route: ActivatedRoute) {
    route.data.pipe(map(v => v['homeData'])).subscribe({
      next: ([banners, hotPlayList, songSheet, singerList]) => {
        this.banners = banners || []
        this.hotPlayList = hotPlayList || []
        this.songSheet = songSheet || []
        this.singerList = singerList || []
      }
    })
  }

  ngOnInit(): void {

  }
}
