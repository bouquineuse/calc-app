import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { CalcConfig } from './calc-config.entity';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-calc-config',
  templateUrl: './calc-config.component.html',
  styleUrls: ['./calc-config.component.scss'],
})
export class CalcConfigComponent implements OnInit {
  @Input() additionConfig: CalcConfig;
  @Output() selectionChange = new EventEmitter<MatCheckboxChange>();

  options: Options = {
    floor: 0,
    ceil: 200,
  };

  constructor() {}

  ngOnInit(): void {}

  onChange(evt: MatCheckboxChange): void {
    this.selectionChange.emit(evt);
  }
}
