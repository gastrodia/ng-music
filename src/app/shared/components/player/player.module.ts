import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import {AntdModule} from "../../antd/antd.module";



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    AntdModule
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
