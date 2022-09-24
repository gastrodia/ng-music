import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ComponentsModule} from "./components/components.module";
import {AntdModule} from "./antd/antd.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    FormsModule,
    AntdModule,
    ComponentsModule
  ]
})
export class SharedModule { }
