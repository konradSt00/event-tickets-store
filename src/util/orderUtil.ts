import {OrderRsRq} from "../model/request/OrderRsRq";

import {CartItem} from "../model/cart/CartItem";

export const buildOrderRq = (cartItems: CartItem[], email: string): OrderRsRq => {
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