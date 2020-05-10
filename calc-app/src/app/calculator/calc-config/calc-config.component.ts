import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl, FormGroup } from '@angular/forms';
import { CalcConfig } from './calc-config.entity';

@Component({
  selector: 'app-calc-config',
  templateUrl: './calc-config.component.html',
  styleUrls: ['./calc-config.component.scss'],
})
export class CalcConfigComponent implements OnInit {
  formGroup: FormGroup;
  additionConfig: CalcConfig;

  options: Options = {
    floor: 0,
    ceil: 200,
  };

  constructor() {
    this.additionConfig = { operand: 'addition', range: [0, 100] };
    this.formGroup = new FormGroup({
      range: new FormControl(this.additionConfig.range),
    });
  }

  ngOnInit(): void {}
}
