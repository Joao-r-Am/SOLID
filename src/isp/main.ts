/**
 * Interface segregation principle (Princiio de segragação de Interfaces)
 * os clients nao devem ser forçados a depender de interfaces que não utilizam
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './services/product';
import { ShoppingCart } from './services/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount, TwentyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const individualCustomer = new IndividualCustomer('TUNG TUNG TUNG TUNG TUNG', 'SAHUR', '614.713.115-22');
// const enterpriseCustomer = new EnterpriseCustomer()
const order = new Order(shoppingCart, messaging, persistence, individualCustomer);

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
