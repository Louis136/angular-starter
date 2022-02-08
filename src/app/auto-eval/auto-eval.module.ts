 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AutoEvalRoutingModule } from './auto-eval-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AutoEvalRoutingModule,
    NgbModule
  ],
  providers: [],
  exports: []
})
export class AutoEvalModule { }
