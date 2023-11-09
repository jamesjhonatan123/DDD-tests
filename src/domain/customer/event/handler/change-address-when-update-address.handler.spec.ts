import CustomerCreatedEvent from "../customer-created-event";
import { customerUpdateAddressSeed } from "../seed/customerUpdateAddressSeed";
import { ChangeAddressWhenUpdateAddressHandler } from "./change-address-when-update-address.handler";
describe("SendEmailWhenCustomerIsCreated handler unit test", () => {
  it("should execute the handler function when is call", () => {
    const changeAddressWhenUpdateAddress =
      new ChangeAddressWhenUpdateAddressHandler();
    changeAddressWhenUpdateAddress.handle = jest.fn();
    const event = new CustomerCreatedEvent(customerUpdateAddressSeed);
    changeAddressWhenUpdateAddress.handle(event);

    expect(changeAddressWhenUpdateAddress.handle).toBeCalledTimes(1);
    expect(changeAddressWhenUpdateAddress.handle).toBeCalledWith(event);
  });

  it("should print two console.logs", () => {
    const logSpy = jest.spyOn(console, "log");
    const changeAddressWhenUpdateAddress =
      new ChangeAddressWhenUpdateAddressHandler();
    const event = new CustomerCreatedEvent(customerUpdateAddressSeed);
    changeAddressWhenUpdateAddress.handle(event);

    expect(logSpy).toBeCalled();
    expect(logSpy).toHaveBeenCalledWith(
      `Endereço do cliente: ${customerUpdateAddressSeed.id}, ${customerUpdateAddressSeed.nome} alterado para: ${customerUpdateAddressSeed.endereco}`
    );
  });
});
