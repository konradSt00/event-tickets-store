import {Event} from "../model/Event";
import {Category} from "../model/Category";
import {Order} from "../model/order/Order";
import {EventOrder} from "../model/order/EventOrder";

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

export const exampleEventOrder1: EventOrder[] = [
    {
        name: 'Koncert TacoHemingway Torwar',
        quantity: 1,
        price: 123.99
    },
    {
        name: 'Koncert Pitbull TauronArena',
        quantity: 3,
        price: 523.99
    },
]

export const exampleEventOrder2: EventOrder[] = [
    {
        name: 'Koncert TacoHemingway Narodowy',
        quantity: 4,
        price: 123.99
    },
    {
        name: 'Koncert Pitbull TauronArena',
        quantity: 1,
        price: 523.99
    },

    {
        name: 'Koncert Beyonce TauronArena',
        quantity: 3,
        price: 523.99
    },
]

export const exampleOrder: Order[] = [
    {
        id: '1',
        event: exampleEventOrder1,
        date: '2020-10-10'
    },
    {
        id: '2',
        event: exampleEventOrder2,
        date: '2025-10-10'
    }
]