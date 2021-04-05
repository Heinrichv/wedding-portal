import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-guest',
  templateUrl: './manage-guest.component.html',
  styleUrls: ['./manage-guest.component.scss']
})
export class ManageGuestComponent implements OnInit {

  guest: any = {
    guestId: 0,
    fname: '',
    sname: '',
    email: '',
    phoneNumber: '',
    hasPlusOne: false,
    inviteSent: false,
    response: 0,
    adminUserId: Number(window.localStorage.getItem('adminUserId')),
    guestParties: []
  };

  constructor(readonly adminService: AdminService, readonly router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.adminService.addGuest(this.guest).subscribe((response: any) => window.location.reload());
  }

  addGuestParty(): void {
    this.guest.guestParties.push({
      fname: '',
      sname: '',
      response: 0
    });
  }

  removeGuestParty(): void {

  }
}
