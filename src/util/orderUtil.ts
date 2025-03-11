import {OrderRq} from "../model/request/OrderRq";

import {CartItem} from "../model/cart/CartItem";

export const buildOrderRq = (cartItems: CartItem[], email: string): OrderRq => {
    return {
        eventOrder: cartItems.map(item => {
            return {
                quantity: item.quantity,
                eventId: item.id.toString(),
            }
        }),
        userEmail: email
    }
}