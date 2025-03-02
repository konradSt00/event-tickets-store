import {Event} from "../Event";
import {Category} from "../Category";
import {View} from "../../store/reducer";
import {CartItem} from "../cart/CartItem";
import {ProfileState} from "./ProfileState";

export interface StoreState {
    events: Event[]
    categories: Category[]
    currentView: View,
    cartItems: CartItem[],
    profileState: ProfileState
}