import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { HttpClientModule   }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
// import { FormControlDirective } from './directive/form-control.directive';
import {environment as env } from '../environments/environment'


import { NestDirective } from './directive/nest.directive';
import { LatchDirective } from './directive/latch.directive';
import { ExtendDirective } from './directive/extend.directive';
import { DeltaNodeDirective } from './directive/delta-node.directive';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NestDirective,
    LatchDirective,
    ExtendDirective,
    DeltaNodeDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
