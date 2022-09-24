import {NgModule, Optional, SkipSelf} from '@angular/core';
import {NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {ServicesModule} from "../services/services.module";
import {PagesModule} from "../pages/pages.module";

registerLocaleData(zh);


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ServicesModule,
    PagesModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  exports: [
    SharedModule
  ]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() private coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CodeModule can only be used in AppModule')
    }
  }
}
