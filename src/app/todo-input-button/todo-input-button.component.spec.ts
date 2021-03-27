import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputButtonComponent } from './todo-input-button.component';

describe('TodoInputButtonComponent', () => {
  let component: TodoInputButtonComponent;
  let fixture: ComponentFixture<TodoInputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
