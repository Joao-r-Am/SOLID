export interface CustomerOrderProtocol {
  getName(): string;
  getIDN(): string;
}

export interface IndividualProtocol {
  firstname: string;
  lasntame: string;
  cpf: string;
}

export interface EnterpriseProtocol {
  firstname: string;
  cnpj: string;
}
