import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistence } from './services/persistence';
import { Product } from './services/product';
import { ShoppingCart } from './services/shopping-cart';

const shoppingCart = new ShoppingCart();
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
order.checkout();
console.log(order.orderStatus);
