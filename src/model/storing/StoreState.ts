import {Event} from "../Event";
import {Category} from "../Category";
import {View} from "../../store/reducer";
import {ProfileState} from "./ProfileState";
import {CartState} from "./CartState";
import {Roles} from "../Roles";
import {DialogAlert} from "./DialogAlert";
import {Order} from "../order/Order";

export interface StoreState {
    events: Event[]
    categories: Category[]
    currentView: View,
    profileState: ProfileState
    cartState: CartState,
    role: Roles,
    alerts: DialogAlert[]
    placedOrder?: Order
}