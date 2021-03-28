import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
	constructor() {}
	todoItems = [
		{
			id: 1,
			name: 'Grocery shopping',
			completed: true,
			location: 'Maxima',
			assignee: 'sELf',
		},
		{
			id: 2,
			name: 'Study',
			completed: true,
			location: '',
			assignee: 'the husband',
		},
		{
			id: 3,
			name: 'Work',
			completed: true,
			location: '',
			assignee: 'SELF',
		},
		{
			id: 4,
			name: 'Play',
			completed: false,
			location: 'Park',
			assignee: 'the wife',
		},
		{
			id: 5,
			name: 'Laundry',
			completed: true,
			location: 'Lobby',
			assignee: 'Self',
		},
		{
			id: 6,
			name: 'mf',
			location: '',
			completed: false,
			assignee: 'unassigned',
		},
	];

	simpleArray = [1, 2, 3, 5, 7, 3, , 5, 67, 78, 7, 4, 3];
	renderComponent = true;

	deleteTodo(todoItem){
		console.log("delete event: ", todoItem);
		console.log("Index of: ",this.todoItems.indexOf(todoItem));
		// const i:number = this.todoItems.indexOf(todoItem);
		// this.todoItems.splice(i, 1);
		for(var i=0; i<this.todoItems.length; i++){
			if (this.todoItems[i] === todoItem) {
				this.todoItems.splice(i, 1)
			}
		}

	  }

	ngOnInit(): void {}
}

