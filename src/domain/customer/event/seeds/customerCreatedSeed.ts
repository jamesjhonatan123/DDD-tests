import Address from "../../value-object/address";
import { IEventDataCreated } from "../types/interfaces";

const address = new Address("rua", 1, "00000000", "natal");

export const customerCreatedSeed: IEventDataCreated = {
  endereco: address,
  id: "123",
  nome: "joao",
};
