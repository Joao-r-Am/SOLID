/**
 * Módulos de alto nível não devem depender de modulos de baixo nivel.
 * Ambos devem dependedr de abstrações.
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 *
 * Classes de naixo nevel são classes que executam tarefas (os detalhes)
 * Classes de alto nivel são classes que gerenciam as classes de basico nivel
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './services/product';
import { ShoppingCart } from './services/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount, TwentyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messagig-protocol';

class MessagingMock implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log('mensagem enviada do mock');
  }
}
const messagin_mock = new Messaging();
const fiftyPercentDiscount = new FiftyPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const individualCustomer = new IndividualCustomer('TUNG TUNG TUNG TUNG TUNG', 'SAHUR', '614.713.115-22');
// const enterpriseCustomer = new EnterpriseCustomer()
const order = new Order(shoppingCart, messagin_mock, persistence, individualCustomer);

shoppingCart.addItem(new Product('Tralalero Tralala', 99.99));
shoppingCart.addItem(new Product('Bombardino crocodillo', 199.99));
shoppingCart.addItem(new Product('Frigo Camelo', 999.99));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
