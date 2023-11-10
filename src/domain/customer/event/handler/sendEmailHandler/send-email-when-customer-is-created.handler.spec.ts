import CustomerCreatedEvent from "../../customer-created-event";
import { customerCreatedSeed } from "../../seeds/customerCreatedSeed";
import { SendEmailWhenCustomerIsCreatedHandler } from "./send-email-when-customer-is-created.handler";
describe("SendEmailWhenCustomerIsCreated handler unit test", () => {
  it("should execute the handler function when is call", () => {
    const sendEmailWhenCustomerIsCreatedHandler =
      new SendEmailWhenCustomerIsCreatedHandler();
    const mockSendEmail = jest.spyOn(
      sendEmailWhenCustomerIsCreatedHandler,
      "handle"
    );
    const event = new CustomerCreatedEvent(customerCreatedSeed);
    sendEmailWhenCustomerIsCreatedHandler.handle(event);

    expect(mockSendEmail).toBeCalledTimes(1);
    expect(mockSendEmail).toBeCalledWith(event);
  });

  it("should print one console.log", () => {
    const logSpy = jest.spyOn(console, "log");
    const sendEmailWhenCustomerIsCreatedHandler =
      new SendEmailWhenCustomerIsCreatedHandler();

    const event = new CustomerCreatedEvent(customerCreatedSeed);
    sendEmailWhenCustomerIsCreatedHandler.handle(event);
    expect(logSpy).toBeCalled();
    expect(logSpy).toHaveBeenCalledWith(
      "Esse é o primeiro console.log do evento: CustomerCreated"
    );
  });
});
