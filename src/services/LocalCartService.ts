import {CartItem} from "../model/cart/CartItem";
import {Event} from "../model/Event"
import store from "../store/store";
import {clearCart} from "../actions/clearCart";
import {updateCart} from "../actions/updateCart";

export const CART_STORAGE_KEY = 'CART_STORAGE';

export class LocalCartService {

    public addTicketToCart(event: Event, quantity = 1) {
        const allItems = this.getAllItems();
        const newCart = allItems.filter(item => item.id !== event.id)
        const newItem = this.buildCartItem(event, quantity, allItems);
        !!newItem && newCart.push(newItem);
        updateCart(newCart);
    }

    public clearCart() {
        clearCart()
    }

    public getAllItems(): CartItem[] {
        return store.getState().cartItems;
    }

    private buildCartItem(event: Event, quantity: number, allItems: CartItem[]) {
        const alreadyAdded = allItems.find(item => item.id === event.id);
        const quantitySum = quantity + (alreadyAdded?.quantity || 0)
        return quantitySum > 0 ? {
            id: event.id,
            name: event.name,
            quantity: quantitySum
        } : null;
    }
}