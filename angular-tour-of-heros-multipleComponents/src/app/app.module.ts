import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //NgModel 사용

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports : [
    BrowserModule,
    FormsModule //NgModel을  사용하기 위해 import
  ],
  declarations: [
    AppComponent
    ,HeroDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
