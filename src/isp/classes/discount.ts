export abstract class Discount {
  protected discount = 0;
  calculate(value: number): number {
    return value - value * (this.discount / 100);
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 50;
  calculate(value: number): number {
    return value - value * (this.discount / 100);
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 10;
}

export class TwentyPercentDiscount extends Discount {
  protected readonly discount = 20;
}

export class NoDiscount extends Discount {
  calculate(value: number): number {
    return value;
  }
}
