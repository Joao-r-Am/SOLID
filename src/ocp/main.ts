/** open/close principle
 * entidades devem estar abertas para extensão e fechadas para modificação
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './services/product';
import { ShoppingCart } from './services/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount, TwentyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

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
