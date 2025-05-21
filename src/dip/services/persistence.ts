import { PersistenceProtocol } from '../classes/interfaces/persistence-protocol';

export class Persistence implements PersistenceProtocol {
  saveOrder() {
    console.log('pedido salvo com sucesso');
  }
}
