import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcTaskComponent } from './calc-task.component';

describe('CalcTaskComponent', () => {
  let component: CalcTaskComponent;
  let fixture: ComponentFixture<CalcTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
