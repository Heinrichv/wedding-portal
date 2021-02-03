import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingDateCountdownComponent } from './components/wedding-date-countdown/wedding-date-countdown.component';
import { HomeComponent } from './views/home/home.component';
import { RsvpComponent } from './views/rsvp/rsvp.component';
import { VenueInfoComponent } from './views/venue-info/venue-info.component';
import { SuggestASongComponent } from './views/suggest-a-song/suggest-a-song.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingDateCountdownComponent,
    HomeComponent,
    RsvpComponent,
    VenueInfoComponent,
    SuggestASongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
