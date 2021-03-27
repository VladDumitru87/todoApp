import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { SimpleInterestComponent } from './components/simple-interest/simple-interest.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TestappComponent } from './components/tester/testapp/testapp.component';
import { TestapptwoComponent } from './components/tester/testapptwo/testapptwo.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { WordfilterPipe } from './wordfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SimpleInterestComponent,
    TodoInputComponent,
    TodoListComponent,
    TestappComponent,
    TestapptwoComponent,
    TitleComponent,
    ButtonComponent,
    TodoListItemComponent,
    WordfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
