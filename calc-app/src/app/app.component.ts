import { Component } from '@angular/core';
import { CalcTask } from './calculator/calc-task/calc-task.entity';
import { CalcConfig } from './calculator/calc-config/calc-config.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Kopfrechen-Trainer';
  calcTask: CalcTask;
  additionConfig: CalcConfig;

  constructor() {
    this.additionConfig = {
      operand: 'addition',
      rangeFirst: [0, 100],
      rangeSecond: [0, 100],
    };
    this.generateTask();
  }

  generateTask() {
    const first = this.getRandomInt(
      this.additionConfig.rangeFirst[0],
      this.additionConfig.rangeFirst[1]
    );
    const second = this.getRandomInt(
      this.additionConfig.rangeSecond[0],
      this.additionConfig.rangeSecond[1]
    );
    const operand = '+';
    const result = null;
    this.calcTask = { first, second, operand, result };
  }

  private getRandomInt(min: number, max: number) {
    return (
      Math.round(Math.random() * (Math.floor(max) - Math.floor(min))) +
      Math.floor(min)
    );
  }
}
