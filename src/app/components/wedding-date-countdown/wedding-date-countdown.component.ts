import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wedding-date-countdown',
  templateUrl: './wedding-date-countdown.component.html',
  styleUrls: ['./wedding-date-countdown.component.scss']
})
export class WeddingDateCountdownComponent implements OnInit {

  constructor(readonly deviceService: DeviceDetectorService) { }
  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  wedding = environment.wedding;
  desktop = false;

  ngOnInit(): void {
    this.desktop = this.deviceService.isDesktop();
    window.setInterval(() => this.getCountdownValue(), 1000);
  }

  getCountdownValue(): void {
    const countDownDate = new Date(environment.wedding.date).getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);

  }

}
