import { Component } from '@angular/core';
import { CalcTask } from './calculator/calc-task/calc-task.entity';
import { CalcConfig } from './calculator/calc-config/calc-config.entity';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Kopfrechen-Trainer';
  calcTask: CalcTask;
  configs: CalcConfig[];
  operations = {
    '+': (arg1: number, arg2: number) => arg1 + arg2,
    '-': (arg1: number, arg2: number) => arg1 - arg2,
    '*': (arg1: number, arg2: number) => arg1 * arg2,
    '/': (arg1: number, arg2: number) => arg1 / arg2,
    '√': (arg1: number, arg2: number) => Math.pow(arg2, 1 / arg1),
    '^': (arg1: number, arg2: number) => Math.pow(arg1, arg2),
  };
  selectedOperations: string[];

  constructor() {
    // this.selectedOperations = Object.getOwnPropertyNames(this.operations);
    this.selectedOperations = ['+', '-'];
    const addConfig = {
      operand: '+',
      active: true,
      rangeFirst: [0, 100],
      rangeSecond: [0, 100],
    };
    const subConfig = {
      operand: '-',
      active: true,
      rangeFirst: [0, 100],
      rangeSecond: [0, 100],
    };
    this.configs = [addConfig, subConfig];
    this.calcTask = {
      first: null,
      second: null,
      operand: '',
      operandFn: null,
      result: null,
    };
    this.generateTask();
  }

  generateTask(): void {
    if (this.selectedOperations.length === 0) {
      console.log('Mindestens eine Rechneart muss ausgewählt werden!');
      return;
    }
    const operand = this.getRandomOperand();
    const currentConfig = this.configs.filter(
      (conf) => conf.operand === operand
    )[0];

    const first = this.getRandomInt(
      currentConfig.rangeFirst[0],
      currentConfig.rangeFirst[1]
    );
    const second = this.getRandomInt(
      currentConfig.rangeSecond[0],
      currentConfig.rangeSecond[1]
    );

    const operandFn = this.operations[operand];

    const result = null;
    this.calcTask = { first, second, operand, operandFn, result };
  }

  updateSelection(evt: MatCheckboxChange): void {
    console.log('CHANGE' + evt.checked + ' ' + evt.source.name);
    if (evt.checked) {
      this.selectedOperations.push(evt.source.name);
    } else {
      const index = this.selectedOperations.indexOf(evt.source.name);
      if (index > -1) {
        this.selectedOperations.splice(index, 1);
      }
    }
    console.log(this.selectedOperations);
  }

  private getRandomInt(min: number, max: number) {
    return (
      Math.round(Math.random() * (Math.floor(max) - Math.floor(min))) +
      Math.floor(min)
    );
  }

  private getRandomOperand(): string {
    let operatorOptions = Object.getOwnPropertyNames(this.operations);
    operatorOptions = operatorOptions.filter((op) =>
      this.selectedOperations.includes(op)
    );
    return operatorOptions[Math.floor(Math.random() * operatorOptions.length)];
  }
}
