import Address from "../../value-object/address";
import { IEventDataCustomerUpdateAddress } from "../types/interfaces";

const address = new Address("rua", 1, "00000000", "natal");

export const customerUpdateAddressSeed: IEventDataCustomerUpdateAddress = {
  endereco: address,
  id: "123",
  nome: "joao",
};
