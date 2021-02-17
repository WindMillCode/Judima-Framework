import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';


import { NestDirective } from './directive/nest.directive';
import { LatchDirective } from './directive/latch.directive';
import { DeltaNodeDirective } from './directive/delta-node.directive';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NestDirective,
    LatchDirective,
    DeltaNodeDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
