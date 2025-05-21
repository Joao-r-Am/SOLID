import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistence } from '../services/persistence';
import { ShoppingCart } from '../services/shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _order_status: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._order_status;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('SEU CARRINHO TA FULLLLLLLLLLLLLLLLLLLL');
      return;
    }

    this._order_status = 'close';
    this.messaging.sendMessage(`Seu pedido com ${this.shoppingCart.totalWithDiscount()} foi recebido`);
    this.persistence.saveOrder();
    this.shoppingCart.clear();
    console.log(this.customer.getName());
    console.log(this.customer.getIDN());
  }
}
