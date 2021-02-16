import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(readonly router: Router) {
  }
  adminId: any;

  ngOnInit(): void {
    this.adminId = window.localStorage.getItem('adminUserId');
  }

  logout() {
    window.localStorage.removeItem('adminUserId');
    this.router.navigateByUrl('home')
      .then(() => window.location.reload());
  }
}
