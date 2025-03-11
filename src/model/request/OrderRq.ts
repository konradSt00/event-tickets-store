export interface OrderRq {
    eventOrder: EventOrderRqRs[],
    userEmail: string,
}

interface EventOrderRqRs {
    eventId: string,
    quantity: number,
}