type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'close';

export class ShoppingCardLegacy {
  private readonly _items: Array<CartItem> = [];
  private _order_status: OrderStatus = 'open'; //mudar

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((acc, val, idx) => acc + val.price, 0).toFixed(2);
  }

  //alterar
  checkout(): void {
    if (this.isEmpty()) {
      console.log('SEU CARRINHO TA FULLLLLLLLLLLLLLLLLLLL');
      return;
    }

    this._order_status = 'close';
    this.sendMessage(`Seu pedido com ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder() {
    console.log('pedido salvo com sucesso');
  }
  /** esvazia o carrinho*/
  clear() {
    console.log('o carrinho foi limpidoooooooooo');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): Readonly<Array<CartItem>> {
    return this._items;
  }
  // alterar
  get orderStatus(): OrderStatus {
    return this._order_status;
  }
}

const shoppingCart = new ShoppingCardLegacy();
shoppingCart.addItem({ name: 'Tralalero Tralala', price: 99.99 });
shoppingCart.addItem({ name: 'Bombardino crocodillo', price: 199.99 });
shoppingCart.addItem({ name: 'Frigo Camelo', price: 999.99 });
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
