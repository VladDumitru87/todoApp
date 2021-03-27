import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  constructor() {}

  @Input() todoItem;
  ngOnInit(): void {}

  setClass() {
    let whatever = {
      todoItem: true,
      'is-complete': this.todoItem.completed,
    };
    return whatever;
  }

  setAssigneeClass() {
    let assigneeClass = {
      'assignee-self': this.todoItem.assignee.toLowerCase() === 'self',
    };
    return assigneeClass;
  }

  showLocation() {
    if (this.todoItem.location && !this.todoItem.completed) {
      return true;
    }

    // return this.todoItem.location && !this.todoItem.completed; //Another way.. simple short,

    // if (this.todoItem.location) {
    //   if (this.todoItem.completed) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
  }
}
