import {Event} from "../model/Event";

export const saleNotStartedYet = (event: Event) => {
    return event.availableFrom > new Date();
}

export const saleEnded = (event: Event) => {
    return event.availableTo < new Date();
}

export const soldOut = (event: Event) => {
    return event.numberOfTicketsAvailable < 1;
}

export const isEventTicketAvailable = (event: Event) => {
    return !saleEnded(event) && !soldOut(event) && !saleNotStartedYet(event);
}