import {Order} from "../model/order/Order";
import {OrderRs} from "../model/response/OrderRs";

export class OrderMapper {
    public mapRs(orderRs: OrderRs): Order {
        return {
            id: orderRs.orderId,
            date: orderRs.date,
            event: orderRs.eventOrderRsList.map(eventOrderRs => {
                return {
                    name: eventOrderRs.eventName,
                    quantity: eventOrderRs.quantity,
                    price: eventOrderRs.ticketPrice
                }
            })
        } as Order
    }
}