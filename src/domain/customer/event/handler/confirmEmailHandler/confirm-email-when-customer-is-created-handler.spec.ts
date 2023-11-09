import CustomerCreatedEvent from "../../customer-created-event";
import { customerCreatedSeed } from "../../seeds/customerCreatedSeed";
import { ConfirmEmailWhenCustomerIsCreatedHandler } from "./confirm-email-when-customer-is-created-handler";
describe("ConfirmEmailWhenCustomerIsCreated handler unit test", () => {
  it("should execute the handler function when is call", () => {
    const confirmEmailWhenCustomerIsCreatedHandler =
      new ConfirmEmailWhenCustomerIsCreatedHandler();
    confirmEmailWhenCustomerIsCreatedHandler.handle = jest.fn();
    const event = new CustomerCreatedEvent(customerCreatedSeed);
    confirmEmailWhenCustomerIsCreatedHandler.handle(event);

    expect(confirmEmailWhenCustomerIsCreatedHandler.handle).toBeCalledTimes(1);
    expect(confirmEmailWhenCustomerIsCreatedHandler.handle).toBeCalledWith(
      event
    );
  });

  it("should print one console.log", () => {
    const logSpy = jest.spyOn(console, "log");
    const confirmEmailWhenCustomerIsCreatedHandler =
      new ConfirmEmailWhenCustomerIsCreatedHandler();
    const event = new CustomerCreatedEvent(customerCreatedSeed);
    confirmEmailWhenCustomerIsCreatedHandler.handle(event);

    expect(logSpy).toBeCalled();
    expect(logSpy).toHaveBeenCalledWith(
      "Esse é o segundo console.log do evento: CustomerCreated"
    );
  });
});
