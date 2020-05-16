export interface CalcTask {
  firstOperand: number;
  secondOperand: number;
  operator: string;
  operatorFn: (arg1: number, arg2: number) => number;
  result: number;
}
