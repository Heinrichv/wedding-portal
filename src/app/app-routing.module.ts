import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RsvpComponent } from './views/rsvp/rsvp.component';
import { SuggestASongComponent } from './views/suggest-a-song/suggest-a-song.component';
import { VenueInfoComponent } from './views/venue-info/venue-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rsvp',
    component: RsvpComponent
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
