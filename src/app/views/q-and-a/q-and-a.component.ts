import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {

  questions = [
    {
      question: 'When is the RSVP cut-off date?',
      answer: 'Please RSVP before 15 July 2021',
      id: 'one'
    },
    {
      question: 'What is the dress code?',
      answer: 'Semi-Formal to Formal',
      id: 'two'
    },
    {
      question: 'Is it an outdoor wedding?',
      answer: 'Our ceremony will be indoors flowing into a pre-reception in the garden, followed by our main reception which is indoors.',
      id: 'three'
    },
    {
      question: 'Can I bring the children along?',
      answer: 'To give all our guests the opportunity to celebrate without having to worry about little eyes and ears, we politely request no children.',
      id: 'four'
    },
    {
      question: 'Can I bring a partner?',
      answer: 'Our numbers are unfortunately limited at the venue. All invited guests have been named on the invitation.',
      id: 'five'
    },
    {
      question: 'May I take photos during the ceremony & reception?',
      // tslint:disable-next-line:max-line-length
      answer: 'We want to keep the ceremony "unplugged" and we have hired professional photographers to capture how this moment looks with their camera, so you can capture how it feels in your heart. Please turn off your cellphones & cameras during the ceremony.\r\nFor photos taken after the ceremony, please use #foreverventer for posting on Social Media.',
      id: 'six'
    },
    {
      question: 'How will the bar at the venue work?',
      answer: 'The venue has a cash bar with card facilities available. NB. No car-bar or cooler boxes are allowed.',
      id: 'seven'
    },
    {
      question: 'What will be the perfect gift for the newly weds?',
      answer: 'As we\'ve got our home dressed up with accessories, we don\'t really think that a wedding registry is necessary. But if you do want to give something to help us on our way, some money in a card will would truly make our day.',
      id: 'eight'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
