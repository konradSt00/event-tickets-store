export interface OrderRs {
    date: string;
    email: string;
    eventOrderRsList: EventOrderRs[]
}

interface EventOrderRs {
    eventName: string;
    ticketPrice: number;
    quantity: number;
}