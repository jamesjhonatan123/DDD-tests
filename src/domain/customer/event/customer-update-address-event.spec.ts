import CustomerUpdateAddressEvent from "./customer-update-address-event";
import { customerUpdateAddressSeed } from "./seeds/customerUpdateAddressSeed";

describe("Customer updated event unit test", () => {
  it("should create a instance of customer updated event with success", () => {
    const customerUpdatedEvent = new CustomerUpdateAddressEvent(
      customerUpdateAddressSeed
    );

    expect(customerUpdatedEvent).toBeDefined();
    expect(customerUpdatedEvent).toBeInstanceOf(CustomerUpdateAddressEvent);
  });

  it("should has the payload inject in your creation", () => {
    const customerUpdatedEvent = new CustomerUpdateAddressEvent(
      customerUpdateAddressSeed
    );

    expect(customerUpdatedEvent).toEqual(
      expect.objectContaining({
        eventData: customerUpdateAddressSeed,
      })
    );
  });
});
