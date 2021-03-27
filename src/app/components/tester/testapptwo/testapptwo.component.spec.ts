import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestapptwoComponent } from './testapptwo.component';

describe('TestapptwoComponent', () => {
  let component: TestapptwoComponent;
  let fixture: ComponentFixture<TestapptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestapptwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestapptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
