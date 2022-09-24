import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongItemComponent } from './song-item/song-item.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {CountPipe} from "../count.pipe";
import {PlayerModule} from "./player/player.module";



@NgModule({
  declarations: [
    SongItemComponent,
    CountPipe
  ],
  imports: [
    CommonModule,
    NzIconModule,
    PlayerModule
  ],
  exports: [
    SongItemComponent,
    CountPipe,
    PlayerModule
  ]
})
export class ComponentsModule { }
