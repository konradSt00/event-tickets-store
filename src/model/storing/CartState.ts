import {CartItem} from "../cart/CartItem";

export interface CartState {
    cartItems: CartItem[],
    cartOpened: boolean;
}