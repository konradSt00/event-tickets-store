import {Category} from "./Category";

export interface Event {
    name: string,
    category: Category,
    description: string,
    location: string,
    date: Date,
    numberOfTicketsAvailable: number,
    ticketPrice: number,
    availableFrom: Date,
    availableTo: Date
}