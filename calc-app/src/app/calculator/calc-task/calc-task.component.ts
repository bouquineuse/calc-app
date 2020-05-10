import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { CalcTask } from './calc-task.entity';
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
export class CalcTaskComponent implements OnInit, OnChanges {
  @Input() calcTask: CalcTask;
  @Output() public generate = new EventEmitter<GenerateEvent>();
  formGroup: FormGroup;
  submitAttempt: boolean;

  constructor(private snackBar: MatSnackBar) {
    this.submitAttempt = false;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      result: new FormControl(
        this.calcTask.result,
        this.calcTask.operandFn
          ? calcTaskValidator(this.getCalcTaskResult())
          : null
      ),
    });
  }

  ngOnChanges(): void {
    this.updateValidators();
  }

  onSubmit(event: Event): void {
    console.log('Submit');
    if (this.formGroup.valid) {
      this.openSnackBar('Sehr gut!', true);
      this.triggerNew();
    } else {
      this.submitAttempt = true;
      this.openSnackBar('Versuchs nochmal.', false);
    }
  }

  onChange(event: Event): void {
    this.submitAttempt = false;
  }

  onClickNew(): void {
    this.triggerNew();
  }

  private openSnackBar(message: string, success: boolean) {
    this.snackBar.open(message, null, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ['feedback-snackbar', success ? 'success' : 'error'],
    });
  }

  private triggerNew(): void {
    const generateEvent = new GenerateEvent();
    this.generate.emit(generateEvent);
    this.updateValidators();
    this.reset();
    this.submitAttempt = false;
  }

  private updateValidators() {
    this.formGroup?.controls.result.setValidators(
      calcTaskValidator(this.getCalcTaskResult())
    );
  }

  private getCalcTaskResult(): number {
    return [this.calcTask?.first, this.calcTask?.second].reduce(
      this.calcTask.operandFn
    );
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

class GenerateEvent {}
