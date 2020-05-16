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
    // '*': (arg1: number, arg2: number) => arg1 * arg2,
    // '/': (arg1: number, arg2: number) => arg1 / arg2,
    // '√': (arg1: number, arg2: number) => Math.pow(arg2, 1 / arg1),
    // '^': (arg1: number, arg2: number) => Math.pow(arg1, arg2),
  };
  selectedOperations: string[];

  constructor() {
    this.selectedOperations = Object.getOwnPropertyNames(this.operations);
    const addConfig = {
      operator: '+',
      active: true,
      rangeFirstOperand: [0, 100],
      rangeSecondOperand: [0, 100],
    };
    const subConfig = {
      operator: '-',
      active: true,
      rangeFirstOperand: [0, 100],
      rangeSecondOperand: [0, 100],
    };
    this.configs = [addConfig, subConfig];
    this.calcTask = {
      firstOperand: null,
      secondOperand: null,
      operator: '',
      operatorFn: null,
      result: null,
    };
    this.generateTask();
  }

  public generateTask(): void {
    if (this.selectedOperations.length === 0) {
      console.log('Mindestens eine Rechneart muss ausgewählt werden!');
      return;
    }
    const operator = this.getRandomOperator();
    const currentConfig = this.configs.filter(
      (conf) => conf.operator === operator
    )[0];

    const firstOperand = this.getRandomInt(
      currentConfig.rangeFirstOperand[0],
      currentConfig.rangeFirstOperand[1]
    );
    const secondOperand = this.getRandomInt(
      currentConfig.rangeSecondOperand[0],
      currentConfig.rangeSecondOperand[1]
    );

    const operatorFn = this.operations[operator];

    const result = null;
    this.calcTask = {
      firstOperand,
      secondOperand,
      operator,
      operatorFn,
      result,
    };
  }

  public updateSelection(evt: MatCheckboxChange): void {
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

  private getRandomInt(min: number, max: number): number {
    return (
      Math.round(Math.random() * (Math.floor(max) - Math.floor(min))) +
      Math.floor(min)
    );
  }

  private getRandomOperator(): string {
    let operatorOptions = Object.getOwnPropertyNames(this.operations);
    operatorOptions = operatorOptions.filter((op) =>
      this.selectedOperations.includes(op)
    );
    return operatorOptions[Math.floor(Math.random() * operatorOptions.length)];
  }
}
