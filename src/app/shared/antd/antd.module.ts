import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzCarouselModule} from "ng-zorro-antd/carousel";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDropDownModule,
    NzCarouselModule
  ]
})
export class AntdModule { }
