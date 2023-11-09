import Address from "../../value-object/address";

export interface IEventDataCustomerUpdateAddress {
  id: string;
  nome: string;
  endereco: Address;
}
