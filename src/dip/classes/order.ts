import { OrderStatus } from './interfaces/order-status';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messagig-protocol';
import { PersistenceProtocol } from './interfaces/persistence-protocol';

export class Order {
  private _order_status: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistence: PersistenceProtocol,
    private readonly customer: CustomerOrderProtocol,
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
