import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor() { }

  guest: any;

  ngOnInit(): void {

    const rsvp = window.localStorage.getItem('rsvp');

    if (rsvp) {
      this.guest = JSON.parse(rsvp);
    }
  }

}
