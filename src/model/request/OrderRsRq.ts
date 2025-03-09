export interface OrderRsRq {
    eventOrder: EventOrderRqRs[],
    userEmail: string,
}

interface EventOrderRqRs {
    eventId: string,
    quantity: number,
}