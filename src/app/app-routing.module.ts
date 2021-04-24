import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { HomeComponent } from './views/home/home.component';
import { OurStoryComponent } from './views/our-story/our-story.component';
import { PhotosComponent } from './views/photos/photos.component';
import { QAndAComponent } from './views/q-and-a/q-and-a.component';
import { RsvpRedirectComponent } from './views/rsvp/rsvp-redirect/rsvp-redirect.component';
import { RsvpComponent } from './views/rsvp/rsvp.component';
import { SuggestASongComponent } from './views/suggest-a-song/suggest-a-song.component';
import { VenueInfoComponent } from './views/venue-info/venue-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'rsvp',
    component: RsvpComponent,
  },
  {
    path: 'redirect/:code',
    component: RsvpRedirectComponent,
  },
  {
    path: 'suggest-a-song',
    component: SuggestASongComponent
  },
  {
    path: 'venue-info',
    component: VenueInfoComponent
  },
  {
    path: 'gallery',
    component: PhotosComponent
  },
  {
    path: 'q&a',
    component: QAndAComponent
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
