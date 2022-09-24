import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import { MemberComponent } from './components/member/member.component';


@NgModule({
  declarations: [
    HomeComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
