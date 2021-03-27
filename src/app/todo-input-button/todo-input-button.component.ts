import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input-button',
  templateUrl: './todo-input-button.component.html',
  styleUrls: ['./todo-input-button.component.scss']
})
export class TodoInputButtonComponent implements OnInit {

  constructor() { }

  @Input() text!: string;

  ngOnInit(): void {
  }

}
