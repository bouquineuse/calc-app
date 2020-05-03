import { Component, OnInit } from '@angular/core';
import { CalcTask } from '../calc-task.entity';
import {
  Validators,
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-calc-task',
  templateUrl: './calc-task.component.html',
  styleUrls: ['./calc-task.component.scss'],
})
export class CalcTaskComponent implements OnInit {
  formGroup: FormGroup;
  calcTask: CalcTask;
  submitAttempt: boolean;

  constructor() {
    this.calcTask = { first: 1, second: 3, operand: '+', result: 4 };
    this.formGroup = new FormGroup({
      result: new FormControl(
        this.calcTask.result,
        calcTaskValidator(this.calcTask.result)
      ),
    });
    this.submitAttempt = false;
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    this.submitAttempt = true;
    console.log('Submit');
  }

  onChange(event: Event): void {
    this.submitAttempt = false;
  }
}

export function calcTaskValidator(val: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (val !== control.value) {
      console.log('val:' + val + 'control.value: ' + control.value);
      return { notEqual: true, requiredValue: val };
    }
    console.log('noerror');
    return null;
  };
}
