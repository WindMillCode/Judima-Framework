import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HttpHeaders,HttpXhrBackend,   }    from '@angular/common/http';
import { ExtendDirective } from './directive/extend.directive';


@NgModule({
  declarations: [
    AppComponent,
    ExtendDirective,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
