import {AbstractService} from "./AbstractService";
import {OrderRq} from "../model/request/OrderRq";
import {AuthService} from "./AuthService";
import store from "../store/store";
import {Actions} from "../actions/actions";
import {OrderRs} from "../model/response/OrderRs";
import {OrderMapper} from "../mapper/OrderMapper";
import {Order} from "../model/order/Order";

export class OrderService extends AbstractService {
    private static orderMapper = new OrderMapper();

    public static createOrder(request: OrderRq): Promise<Order> {
        return this.post<OrderRq, OrderRs>('/orders/new', request)
            .then((response) => this.orderMapper.mapRs(response.data));
    }

    public static getOrders() {
        this.get<any, OrderRs[]>('/orders/user/' + AuthService.getUserId())
            .then(response => {
                store.dispatch({
                    type: Actions.ADD_ORDERS,
                    payload: response.data.map(this.orderMapper.mapRs)
                })
            })
    }
}