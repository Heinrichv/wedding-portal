import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  adminId: any;

  constructor(readonly deviceService: DeviceDetectorService, readonly router: Router, private titleService: Title) {

  }

  desktop = false;

  ngOnInit(): void {
    this.router.events.subscribe(path => {
      if (path instanceof NavigationStart) {
        const urls = path.url.substring(1).split('/');
        this.titleService.setTitle(`Forever Venter - ${this.titleCase(urls[0])}`);
      }
    });

    this.desktop = this.deviceService.isDesktop();
    this.adminId = window.localStorage.getItem('adminUserId');
  }

  logout(): void {
    window.localStorage.removeItem('adminUserId');
    this.router.navigateByUrl('home').then(() => window.location.reload());
  }

  titleCase(text: string): string {
    const sentence = text.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
  }
}
