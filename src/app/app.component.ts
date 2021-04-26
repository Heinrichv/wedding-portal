import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  adminId: any;

  constructor(readonly deviceService: DeviceDetectorService, readonly router: Router) { }

  desktop = false;

  ngOnInit(): void {
    this.desktop = this.deviceService.isDesktop();
    this.adminId = window.localStorage.getItem('adminUserId');

  }

  logout() {
    window.localStorage.removeItem('adminUserId');
    this.router.navigateByUrl('home')
      .then(() => window.location.reload());
  }
}
