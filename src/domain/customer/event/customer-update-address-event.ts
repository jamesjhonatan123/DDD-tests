import EventInterface from "../../@shared/event/event.interface";
import { IEventDataCustomerUpdateAddress } from "./types/interfaces";

export default class CustomerUpdateAddressEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: IEventDataCustomerUpdateAddress;

  constructor(eventData: IEventDataCustomerUpdateAddress) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
