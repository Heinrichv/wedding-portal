import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-date-countdown',
  templateUrl: './wedding-date-countdown.component.html',
  styleUrls: ['./wedding-date-countdown.component.scss']
})
export class WeddingDateCountdownComponent implements OnInit {

  constructor() { }
  countdown = "";
  ngOnInit(): void {
    window.setInterval(() => this.getCountdownValue(), 1000);
  }

  getCountdownValue() {
    var countDownDate = new Date("Nov 18, 2021 16:30:00").getTime();

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    this.countdown = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";

    // If the count down is finished, write some text
    if (distance < 0) {
      this.countdown = 'Wedding Time!!'
    }
  }

}
