import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongItemComponent } from './song-item/song-item.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {CountPipe} from "../count.pipe";



@NgModule({
  declarations: [
    SongItemComponent,
    CountPipe
  ],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [
    SongItemComponent,
    CountPipe
  ]
})
export class ComponentsModule { }
