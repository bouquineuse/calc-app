import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcConfigComponent } from './calc-config.component';

describe('CalcConfigComponent', () => {
  let component: CalcConfigComponent;
  let fixture: ComponentFixture<CalcConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
