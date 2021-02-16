import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-guest',
  templateUrl: './manage-guest.component.html',
  styleUrls: ['./manage-guest.component.scss']
})
export class ManageGuestComponent implements OnInit {

  guest = {
    guestId: 0,
    fname: '',
    sname: '',
    email: '',
    phoneNumber: '',
    hasPlusOne: false,
    InviteSent: false,
    response: 0,
    adminUserId: window.localStorage.getItem('adminUserId')
  };

  constructor(readonly adminService: AdminService, readonly router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.adminService.addGuest(this.guest).subscribe((response: any) => window.location.reload());
  }
}
