import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcTaskComponent } from './calc-task/calc-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CalcTaskComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [CalcTaskComponent],
})
export class CalculatorModule {}
