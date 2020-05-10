import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcTaskComponent } from './calc-task/calc-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CalcConfigComponent } from './calc-config/calc-config.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [CalcTaskComponent, CalcConfigComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    Ng5SliderModule,
    MatCheckboxModule,
    FormsModule,
  ],
  exports: [CalcTaskComponent, CalcConfigComponent],
})
export class CalculatorModule {}
