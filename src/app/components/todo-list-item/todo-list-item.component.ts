import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-todo-list-item',
	templateUrl: './todo-list-item.component.html',
	styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
	constructor() {}

	@Input() todoItem;

	@Output() deleteTodoEvent = new EventEmitter<unknown>();

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
	}

	onDelete(todoItem) {
		// console.log('to be deleted: ', todoItem);
		this.deleteTodoEvent.emit(todoItem);
	}

	onCheckboxToggle(todoItem) {
	todoItem.completed = !todoItem.completed
	}
}
