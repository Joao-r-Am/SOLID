export interface PersistenceProtocol {
  /** salva o pedido do usuário */
  saveOrder(): void;
}
