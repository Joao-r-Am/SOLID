import { Discount, FiftyPercentDiscount } from '../classes/discount';
import { CartItem } from '../classes/interfaces/cart-item';

export class ShoppingCart {
  public _items: Array<CartItem> = [];

  constructor(private readonly discount: Discount) {}

  get items(): Readonly<Array<CartItem>> {
    return this._items;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((acc, val, idx) => acc + val.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  /** esvazia o carrinho*/
  clear() {
    console.log('o carrinho foi limpidoooooooooo');
    this._items.length = 0;
  }
}
