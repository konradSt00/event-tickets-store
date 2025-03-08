import {Category} from "./Category";

export interface Event {
    id: number,
    name: string,
    category: Category,
    description: string,
    location: string,
    date: Date,
    imageLink: string,
    time: string

    numberOfTicketsAvailable: number,
    ticketPrice: number,
    availableFrom: Date,
    availableTo: Date,

}