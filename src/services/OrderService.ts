import {AbstractService} from "./AbstractService";
import {OrderRsRq} from "../model/request/OrderRsRq";
import {AuthService} from "./AuthService";
import store from "../store/store";
import {Actions} from "../actions/actions";
import {Order} from "../model/order/Order";
import {OrderRs} from "../model/response/OrderRs";

export class OrderService extends AbstractService {
    public static createOrder(request: OrderRsRq) {
        this.post<OrderRsRq, OrderRsRq>('/orders/new', request);
    }

    public static getOrders() {
        this.get<any, OrderRs[]>('/orders/user/' + AuthService.getUserId())
            .then(response => {
                store.dispatch({
                    type: Actions.ADD_ORDERS,
                    payload: response.data.map(orderRs => {
                        return {
                            date: orderRs.date,
                            event: orderRs.eventOrderRsList.map(eventOrderRs => {
                                return {
                                    name: eventOrderRs.eventName,
                                    quantity: eventOrderRs.quantity,
                                    price: eventOrderRs.ticketPrice
                                }
                            })
                        } as Order
                    })
                })
            })
    }
}