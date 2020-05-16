import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Kopfrechen-Trainer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Kopfrechen-Trainer');
  });

  describe('generateTask', () => {
    it('should generate addition task', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.selectedOperations = ['+'];
      app.generateTask();
      expect(app.calcTask.operand).toEqual('+');
    });

    it('should generate subtraction task', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.selectedOperations = ['-'];
      app.generateTask();
      expect(app.calcTask.operand).toEqual('-');
    });

    it('should generate addition task with operands 10 and 20', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.selectedOperations = ['+'];
      app.configs[0].rangeFirst = [10, 10];
      app.configs[0].rangeSecond = [20, 20];
      app.generateTask();
      expect(app.calcTask.first).toEqual(10);
      expect(app.calcTask.second).toEqual(20);
    });

    it('should generate subtraction task with operands 10 and 20', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.selectedOperations = ['-'];
      app.configs[1].rangeFirst = [10, 10];
      app.configs[1].rangeSecond = [20, 20];
      app.generateTask();
      expect(app.calcTask.first).toEqual(10);
      expect(app.calcTask.second).toEqual(20);
    });
  });
});
