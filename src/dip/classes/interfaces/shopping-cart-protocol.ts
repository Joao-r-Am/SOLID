import { Discount } from '../discount';
import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  /** propriedade items*/
  items: Readonly<Array<CartItem>>;
  /** Adiciona um item ao shopping cart*/
  addItem(item: CartItem): void;
  /** remove os itens do shopping cart*/
  removeItem(index: number): void;
  /** retorna o calculo do total dos itens do shopping cart*/
  total(): number;
  /** verifica se o shopping cart esta vazio*/
  isEmpty(): boolean;
  /** retorna o calculo do total com desconto aplicado*/
  totalWithDiscount(): number;
  /** esvazia o carrinho*/
  clear(): void;
}
