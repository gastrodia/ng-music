import {Component, Input, OnInit} from '@angular/core';
import {SongSheetItem} from "src/app/services/types/song.types";

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {
  @Input() song: SongSheetItem = {
    alg: "",
    canDislike: false,
    copywriter: "",
    highQuality: false,
    id: 0,
    name: "",
    picUrl: "",
    playCount: 0,
    trackCount: 0,
    trackNumberUpdateTime: 0,
    type: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
