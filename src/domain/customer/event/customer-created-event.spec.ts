import CustomerCreatedEvent from "./customer-created-event";
import { customerCreatedSeed } from "./seeds/customerCreatedSeed";

describe("Customer created event unit test", () => {
  it("should create a instance of customer created event with success", () => {
    const customerCreatedEvent = new CustomerCreatedEvent(customerCreatedSeed);

    expect(customerCreatedEvent).toBeDefined();
    expect(customerCreatedEvent).toBeInstanceOf(CustomerCreatedEvent);
  });

  it("should has the payload inject in your creation", () => {
    const customerCreatedEvent = new CustomerCreatedEvent(customerCreatedSeed);

    expect(customerCreatedEvent).toEqual(
      expect.objectContaining({
        eventData: customerCreatedSeed,
      })
    );
  });
});
