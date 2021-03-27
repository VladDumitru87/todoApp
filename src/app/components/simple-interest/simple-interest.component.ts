import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.scss']
})
export class SimpleInterestComponent implements OnInit {

  
  constructor() { }
  title: string = 'Simple Interest Calculator'
  calculateButton: string = 'Calculate'

  ngOnInit(): void {
  }

}
