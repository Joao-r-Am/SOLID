export interface MessagingProtocol {
  /** envia uma mensagem para o usuário */
  sendMessage(message: string): void;
}
