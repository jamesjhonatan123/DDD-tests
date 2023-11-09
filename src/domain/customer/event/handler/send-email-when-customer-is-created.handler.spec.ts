import CustomerCreatedEvent from "../customer-created-event";
import { SendEmailWhenCustomerIsCreatedHandler } from "./send-email-when-customer-is-created.handler";
describe("SendEmailWhenCustomerIsCreated handler unit test", () => {
  it("should execute the handler function when is call", () => {
    const sendEmailWhenCustomerIsCreatedHandler =
      new SendEmailWhenCustomerIsCreatedHandler();
    sendEmailWhenCustomerIsCreatedHandler.handle = jest.fn();
    const event = new CustomerCreatedEvent({
      id: "123",
    });
    sendEmailWhenCustomerIsCreatedHandler.handle(event);

    expect(sendEmailWhenCustomerIsCreatedHandler.handle).toBeCalledTimes(1);
    expect(sendEmailWhenCustomerIsCreatedHandler.handle).toBeCalledWith(event);
  });

  it("should print two console.logs", () => {
    const logSpy = jest.spyOn(console, "log");
    const sendEmailWhenCustomerIsCreatedHandler =
      new SendEmailWhenCustomerIsCreatedHandler();
    const event = new CustomerCreatedEvent({
      id: "123",
    });
    sendEmailWhenCustomerIsCreatedHandler.handle(event);

    expect(logSpy).toBeCalled();
    expect(logSpy).toHaveBeenCalledWith(
      "Esse é o primeiro console.log do evento: CustomerCreated"
    );
    expect(logSpy).toHaveBeenCalledWith(
      "Esse é o segundo console.log do evento: CustomerCreated"
    );
  });
});
