import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor(readonly adminService: AdminService) { }

  searchGuest: any = {
    fname: null,
    lname: null
  };
  guest: any;

  ngOnInit(): void {

    const rsvp = window.localStorage.getItem('rsvp');

    if (rsvp) {
      this.guest = JSON.parse(rsvp);
    }
  }

  findGuest(): void {
    this.adminService.getGuestByGuestName(this.searchGuest.fname, this.searchGuest.lname).subscribe((res: any) => {
      this.guest = res;
    }, (err: any) => {

    });
  }

}
