import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-rsvp-redirect',
  templateUrl: './rsvp-redirect.component.html',
  styleUrls: ['./rsvp-redirect.component.scss']
})
export class RsvpRedirectComponent implements OnInit {

  constructor(readonly activatedroute: ActivatedRoute, readonly admin: AdminService, readonly router: Router) { }
  hasCode = false;
  error: any;

  ngOnInit(): void {
    const code = this.activatedroute.snapshot.paramMap.get('code');
    console.log(code);
    if (code) {
      this.hasCode = true;

      this.admin.getGuestByRsvpCode(code).subscribe((res: any) => {
        window.localStorage.setItem('rsvp', JSON.stringify(res));

        this.router.navigateByUrl('rsvp');
      }, (err) => {
        this.error = 'Guest not found';
      });
    }


  }

}
