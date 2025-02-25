import {Event} from "../model/Event";
import {Category} from "../model/Category";

export const exampleCategories: Category[] = [
    {id: '1', name: 'Koncert'}
]

export const exampleEvents: Event[] = [
    {
        id: 1,
        name: 'Dawid Podsiadlo na Narodowym',
        category: exampleCategories[0],
        location: 'Warszawa',
        date: new Date(),
        numberOfTicketsAvailable: 3,
        availableFrom: new Date(),
        availableTo: new Date(),
        description: 'Lorem ipsum costam przykladowy tekst jakis',
        ticketPrice: 123.99,
    },
    {
        id: 2,
        name: 'Taco Hemingway na Narodowym',
        category: exampleCategories[0],
        location: 'Warszawa',
        date: new Date(),
        numberOfTicketsAvailable: 5,
        availableFrom: new Date(),
        availableTo: new Date(),
        description: 'Lorem ipsum costam przykladowy tekst jakis',
        ticketPrice: 123.99,
    }
]