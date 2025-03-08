import {Category} from "../Category";

export interface EventRqRs {
    id: number,
    name: string,
    category: Category,
    description: string,
    location: string,
    date: string,
    imageLink: string,
    time: string

    numberOfTicketsAvailable: number,
    ticketPrice: number,
    availableFrom: string,
    availableTo: string,
}