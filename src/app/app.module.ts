import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlideDeckComponent } from './components/slide-deck/slide-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SlideComponent,
    SlideDeckComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
