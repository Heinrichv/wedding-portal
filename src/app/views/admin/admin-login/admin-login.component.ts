import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(readonly adminService: AdminService, readonly router: Router) {

  }

  ngOnInit(): void {
  }

  login(): void {
    this.adminService.login(this.credentials.username, this.credentials.password).subscribe((response: any) => {
      console.log(response);

      window.localStorage.setItem('adminUserId', response.adminUserId);
      this.router.navigateByUrl('/admin')
        .then(() => window.location.reload());
    });
  }

}
