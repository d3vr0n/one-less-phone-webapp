import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SecureRoutingModule,
    NgbModule
  ]
})
export class SecureModule { }
