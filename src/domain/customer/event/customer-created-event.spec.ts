import CustomerCreatedEvent from "./customer-created-event";

describe("Customer created event unit test", () => {
  it("should create a instance of customer created event with success", () => {
    const createEvent = {
      id: "123",
    };
    const customerCreatedEvent = new CustomerCreatedEvent(createEvent);

    expect(customerCreatedEvent).toBeDefined();
    expect(customerCreatedEvent).toBeInstanceOf(CustomerCreatedEvent);
  });

  it("should has the payload inject in your creation", () => {
    const createEvent = {
      id: "123",
    };
    const customerCreatedEvent = new CustomerCreatedEvent(createEvent);

    expect(customerCreatedEvent).toEqual(
      expect.objectContaining({
        eventData: {
          id: "123",
        },
      })
    );
  });
});
