import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor(readonly adminService: AdminService, readonly youtube: YoutubeService, readonly formBuilder: FormBuilder) { }

  loading = false;

  searchGuest: any = {
    fname: null,
    lname: null
  };

  guest: any;

  songs: any[] = [];

  rsvpForm = this.formBuilder.group({
    id: ['', Validators.required]
  });

  ngOnInit(): void {
    this.rsvpForm = this.formBuilder.group({
      id: ['', Validators.required]
    });

    const rsvp = window.localStorage.getItem('rsvp');

    if (rsvp) {
      this.guest = JSON.parse(rsvp);
      this.loadGuest();
    }
  }

  loadGuest(): void {
    this.loading = true;
    this.adminService.getGuestById(this.guest.guestId).subscribe((res: any) => {
      this.guest = res;
      window.localStorage.setItem('rsvp', JSON.stringify(this.guest));

      this.loading = false;
    }, (err: any) => {
      this.loading = false;
    });
  }

  findGuest(): void {
    this.loading = true;
    this.adminService.getGuestByGuestName(this.searchGuest.fname, this.searchGuest.lname).subscribe((res: any) => {
      this.guest = res;
      window.localStorage.setItem('rsvp', JSON.stringify(this.guest));
      this.loading = false;
    }, (err: any) => {
      this.loading = false;
    });
  }

  rsvpGuest(guestId: any, option: string): void {
    this.loading = true;
    this.adminService.rsvpGuest(guestId, option).subscribe((res: any) => {
      this.loadGuest();
    }, (err: any) => {
      this.loading = false;
    });
  }


  rsvpGuestParty(guestPartyId: any, option: string): void {
    this.loading = true;
    this.adminService.rsvpGuestParty(guestPartyId, option).subscribe((res: any) => {
      this.loadGuest();
    }, (err: any) => {
      this.loading = false;
    });
  }

  logout(): void {
    this.guest = null;
    window.localStorage.removeItem('rsvp');
  }

  suggestSong(song: any): void {
    this.loading = true;

    this.songs = this.songs.filter(x => x !== song);

    this.adminService.suggestSong(this.guest.guestId, {
      title: song.name,
      artist: (song.artists as any[]).map(x => x.name).join(', '),
      guestId: this.guest.guestId
    }).subscribe(() => this.loadGuest(), () => this.loading = false);
  }

  searchSongs(query: any): void {

    if (query.length < 3) {
      return;
    }

    this.youtube.getToken().subscribe((token: any) => {
      this.youtube.getTracks(query, token.access_token)
        .subscribe((tracks: any) => {
          this.songs = tracks.items;
          this.loading = false;
        }, () => this.loading = false);
    });
  }

  removeSuggestedSong(song: any): void {
    this.adminService.removeSuggestedSong(song.songSuggestionId)
      .subscribe(() => this.loadGuest(), () => this.loading = false);
  }

  clearSongs(): void {
    this.songs = [];
  }

  splitItems(text: string) {

    return text.split(', ');
  }

}
