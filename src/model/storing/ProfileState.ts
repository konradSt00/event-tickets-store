import {Order} from "../order/Order";
import {UserData} from "./UserData";

export interface ProfileState {
    userData?: UserData,
    historicalOrders: Order[]
}