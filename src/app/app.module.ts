import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingDateCountdownComponent } from './components/wedding-date-countdown/wedding-date-countdown.component';
import { HomeComponent } from './views/home/home.component';
import { RsvpComponent } from './views/rsvp/rsvp.component';
import { VenueInfoComponent } from './views/venue-info/venue-info.component';
import { SuggestASongComponent } from './views/suggest-a-song/suggest-a-song.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminLoginComponent } from './views/admin/admin-login/admin-login.component';
import { GuestService } from './services/guest.service';
import { AdminService } from './services/admin.service';
import { ManageGuestComponent } from './views/admin/manage-guest/manage-guest.component';
import { OurStoryComponent } from './views/our-story/our-story.component';
import { QAndAComponent } from './views/q-and-a/q-and-a.component';
import { PhotosComponent } from './views/photos/photos.component';
import { RsvpRedirectComponent } from './views/rsvp/rsvp-redirect/rsvp-redirect.component';
import { LazyImgDirective } from './directives/LazyImgDirective';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    WeddingDateCountdownComponent,
    HomeComponent,
    RsvpComponent,
    VenueInfoComponent,
    SuggestASongComponent,
    AdminComponent,
    AdminLoginComponent,
    ManageGuestComponent,
    OurStoryComponent,
    QAndAComponent,
    PhotosComponent,
    RsvpRedirectComponent,
    LazyImgDirective,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GuestService, AdminService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
