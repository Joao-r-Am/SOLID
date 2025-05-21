import { CustomerOrder, EnterpriseProtocol, IndividualProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualProtocol, CustomerOrder {
  firstname: string;
  lasntame: string;
  cpf: string;

  constructor(firstname: string, lasntame: string, cpf: string) {
    this.firstname = firstname;
    this.lasntame = lasntame;
    this.cpf = cpf;
  }

  getIDN(): string {
    return this.cpf;
  }

  getName(): string {
    return `${this.firstname} ${this.lasntame}`;
  }
}
export class EnterpriseCustomer implements EnterpriseProtocol, CustomerOrder {
  firstname: string;
  cnpj: string;

  constructor(firstname: string, lasntame: string, cnpj: string) {
    this.firstname = firstname;
    this.cnpj = cnpj;
  }

  getIDN(): string {
    return this.cnpj;
  }

  getName(): string {
    return `${this.firstname}`;
  }
}
