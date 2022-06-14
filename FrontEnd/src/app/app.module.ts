import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Section2CardsComponent } from './section2-cards/section2-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    Section2CardsComponent,
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
