import {CartItem} from "../model/cart/CartItem";
import {Event} from "../model/Event"

export const CART_STORAGE_KEY = 'CART_STORAGE';

export class LocalCartService {

    public addTicketToCart(event: Event, quantity = 1) {
        const allItems = this.getAllItems();
        const newCart = allItems.filter(item => item.id !== event.id)
        const newItem = this.buildCartItem(event, quantity, allItems);
        !!newItem && newCart.push(newItem);
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    }

    public clearCart() {
        localStorage.removeItem(CART_STORAGE_KEY);
    }

    public getAllItems(): CartItem[] {
        const localCart = localStorage.getItem(CART_STORAGE_KEY);
        return localCart ? JSON.parse(localCart) : [];
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