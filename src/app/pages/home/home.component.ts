import {Component, OnInit} from '@angular/core';
import {BannerItem} from "../../services/types/home.types";
import {HotPlayItem, SongSheetItem} from "../../services/types/song.types";
import {SingerItem} from "../../services/types/singer.types";
import {ActivatedRoute} from "@angular/router";
import {map} from 'rxjs/operators'
import {SheetService} from "../../services/sheet.service";
import {MusicService} from "../../services/music.service";

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


  handleOnSongPlay(id: number) {
    this.sheetService.getSongSheet(id).subscribe({
      next: (v) => {
        const {playlist: {tracks}} = v
        const [first] = tracks
        this.musicService.getMusicPlayUrl(first.id).subscribe({
          next: (o) => {
            console.log(o)
          }
        })
      }
    })
  }

  constructor(
    private route: ActivatedRoute,
    private sheetService: SheetService,
    private musicService: MusicService
  ) {
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
