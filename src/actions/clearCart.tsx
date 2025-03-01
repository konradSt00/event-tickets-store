import {CART_STORAGE_KEY} from "../services/LocalCartService";
import store from "../store/store";
import {Actions} from "./actions";

export const clearCart = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    store.dispatch({
        type: Actions.UPDATE_CART,
        payload: []
    })
}