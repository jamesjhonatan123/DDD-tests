import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerUpdateAddressEvent from "../customer-update-address-event";

export class ChangeAddressWhenUpdateAddressHandler
  implements EventHandlerInterface<CustomerUpdateAddressEvent>
{
  handle(event: CustomerUpdateAddressEvent): void {
    const { id, nome, endereco } = event.eventData;
    console.log(
      `Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}`
    );
  }
}
