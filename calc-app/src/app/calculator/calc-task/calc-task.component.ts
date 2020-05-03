import { Component, OnInit } from '@angular/core';
import { CalcTask } from '../calc-task.entity';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
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

  constructor(private snackBar: MatSnackBar) {
    this.generateTask();
    this.formGroup = new FormGroup({
      result: new FormControl(
        this.calcTask.result,
        calcTaskValidator(this.getCalcTaskResult())
      ),
    });

    this.submitAttempt = false;
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    console.log('Submit');
    if (this.formGroup.valid) {
      this.openSnackBar('Sehr gut!');
      this.generateTask();
      this.reset();
      this.submitAttempt = false;
    } else {
      this.submitAttempt = true;
      this.openSnackBar('Versuchs nochmal.');
    }
  }

  onChange(event: Event): void {
    this.submitAttempt = false;
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

  private generateTask() {
    const first = this.getRandomInt(10);
    const second = this.getRandomInt(10);
    const operand = '+';
    const result = null;
    this.calcTask = { first, second, operand, result };
    this.updateValidators();
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private updateValidators() {
    this.formGroup?.controls.result.setValidators(
      calcTaskValidator(this.getCalcTaskResult())
    );
  }

  private getCalcTaskResult(): number {
    return this.calcTask.first + this.calcTask.second;
  }

  private reset(): void {
    this.formGroup.reset();
  }
}

export function calcTaskValidator(val: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (val !== control.value) {
      console.log('val:' + val + 'control.value: ' + control.value);
      console.log(typeof control.value);
      return { notEqual: true, requiredValue: val };
    }
    console.log('noerror');
    return null;
  };
}
