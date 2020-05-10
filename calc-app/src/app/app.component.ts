import { Component } from '@angular/core';
import { CalcTask } from './calculator/calc-task/calc-task.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Kopfrechen-Trainer';
  calcTask: CalcTask;

  constructor() {
    this.generateTask();
  }

  generateTask() {
    const first = this.getRandomInt(10);
    const second = this.getRandomInt(10);
    const operand = '+';
    const result = null;
    this.calcTask = { first, second, operand, result };
  }

  private getRandomInt(max: number) {
    return Math.ceil(Math.random() * Math.floor(max));
  }
}
