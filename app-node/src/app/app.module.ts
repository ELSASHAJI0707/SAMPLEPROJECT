import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { HttpClientModule } from '@angular/common/http';
import {DataServiceService} from './data-service.service';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    FormsModule,
    AppRoutingModule,
    

     NgxSliderModule
    
   ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
