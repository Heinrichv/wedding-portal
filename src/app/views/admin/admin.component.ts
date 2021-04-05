import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  activeTab = 'guests';
  constructor(readonly adminService: AdminService, readonly router: Router) { }

  guests: any[] = [];
  tables: any[] = [];

  ngOnInit(): void {
    this.initGuests();
  }

  initGuests(): void {
    this.adminService.getGuests()
      .subscribe((response: any[]) => {
        this.guests = response;
      });
  }

  initGuestTables(): void {

  }

  removeGuest(id: any): void {
    this.adminService.removeGuestById(id)
      .subscribe(() => this.initGuests());
  }

  removeGuestParty(id: any): void {
    this.adminService.removeGuestParty(id)
      .subscribe(() => this.initGuests());
  }

  getGuestCount(): number {
    const guestParties = this.guests
      .map(x => x.guestParties.length)
      .reduce((a, b) => {
        return a + b;
      }, 0);

    return this.guests.length + guestParties;
  }
}
