import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rsvp-redirect',
  templateUrl: './rsvp-redirect.component.html',
  styleUrls: ['./rsvp-redirect.component.scss']
})
export class RsvpRedirectComponent implements OnInit {

  constructor(readonly activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.snapshot.paramMap.get("code");
  }

}
