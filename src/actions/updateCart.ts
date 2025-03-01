import store from "../store/store";
import {Actions} from "./actions";
import {CART_STORAGE_KEY} from "../services/LocalCartService";
import {CartItem} from "../model/cart/CartItem";

export const updateCart = (cartState?: CartItem[]) => {
    let cartItems;
    if (!cartState) {
        const localCart = localStorage.getItem(CART_STORAGE_KEY);
        cartItems = localCart ? JSON.parse(localCart) : []
    } else {
        cartItems = cartState
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
    }
    store.dispatch({
        type: Actions.UPDATE_CART,
        payload: cartItems
    })
}