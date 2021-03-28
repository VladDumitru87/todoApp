import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  buttonText = 'Add Item';
  newItem = '';
  @Output() addTodoEvent = new EventEmitter<unknown>();
  

  idCounter = 7;

  addItem(newItem) {
    const newTodoObject = {
      id: this.idCounter,
      name: newItem,
      completed: false,
      assignee: 'Self',
      location: '',
    }
    this.idCounter++;
    this.addTodoEvent.emit(newTodoObject);
  };

  

  

  ngOnInit(): void {
  };

}
