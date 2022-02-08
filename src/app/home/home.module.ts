 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './rome-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  exports: []
})
export class HomeModule { }
