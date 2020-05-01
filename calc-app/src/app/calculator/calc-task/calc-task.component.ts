import { Component, OnInit } from '@angular/core';
import { CalcTask } from '../calc-task.entity';

@Component({
  selector: 'app-calc-task',
  templateUrl: './calc-task.component.html',
  styleUrls: ['./calc-task.component.scss'],
})
export class CalcTaskComponent implements OnInit {
  calcTask: CalcTask;

  constructor() {
    this.calcTask = { first: 1, second: 2, operand: '+' };
  }

  ngOnInit(): void {}
}
