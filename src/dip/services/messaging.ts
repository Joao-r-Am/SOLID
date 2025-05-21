import { MessagingProtocol } from '../classes/interfaces/messagig-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(message);
  }
}
