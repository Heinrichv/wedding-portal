import { Component, OnInit } from '@angular/core';
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

  constructor(readonly adminService: AdminService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.adminService.login(this.credentials.username, this.credentials.password).subscribe((response: any) => {
      console.log(response);

      window.localStorage.setItem('adminUserId', response.adminUserId);
    });
  }

}
