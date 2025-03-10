import {Event} from "../Event";
import {Category} from "../Category";
import {View} from "../../store/reducer";
import {ProfileState} from "./ProfileState";
import {OrderState} from "./OrderState";
import {CartState} from "./CartState";
import {Roles} from "../Roles";

export interface StoreState {
    events: Event[]
    categories: Category[]
    currentView: View,
    profileState: ProfileState
    orderState: OrderState
    cartState: CartState,
    role: Roles
}