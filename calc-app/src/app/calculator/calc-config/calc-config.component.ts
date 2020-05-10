import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  @Input() additionConfig: CalcConfig;

  options: Options = {
    floor: 0,
    ceil: 200,
  };

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      rangeFirst: new FormControl(this.additionConfig.rangeFirst),
      rangeSecond: new FormControl(this.additionConfig.rangeSecond),
    });
  }
}
