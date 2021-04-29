import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {

  questions = [
    {
      question: 'By when should I RSVP?',
      answer: '15 July 2021',
      id: 'one'
    },
    {
      question: 'What is the dress code?',
      answer: 'Semi-Formal',
      id: 'two'
    },
    {
      question: 'Is the wedding outdoor or in a building?',
      answer: 'Outside & inside.\r\nBring enough warm clothes or come dance your hot.',
      id: 'three'
    },
    {
      question: 'Can I bring the children along?',
      answer: 'As much as we love children, our numbers are limited & we can not allow children.',
      id: 'four'
    },
    {
      question: 'Can I bring a companion?',
      answer: 'Our numbers are unfortunately limited at the venue, we may be able to make arrangements later.',
      id: 'five'
    },
    {
      question: 'May I take photos during the ceremony & reception?',
      // tslint:disable-next-line:max-line-length
      answer: 'We want to keep the wedding "offline", so take a quick photo & save the phone. \r\nUse #foreverventer if you post something.',
      id: 'six'
    },
    {
      question: 'Is the bar an "open bar"?',
      answer: 'No. Cash bar with card facility available',
      id: 'seven'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
