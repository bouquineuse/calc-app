export interface CalcTask {
  first: number;
  second: number;
  operand: string;
  operandFn: (arg1: number, arg2: number) => number;
  result: number;
}
