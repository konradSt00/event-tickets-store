import {Event} from "../model/Event";
import {Category} from "../model/Category";
import {Order} from "../model/order/Order";
import {EventOrder} from "../model/order/EventOrder";
import {UserData} from "../model/storing/UserData";

export const exampleCategories: Category[] = [
    {id: '1', name: 'Koncert'}
]

export const exampleEvents: Event[] = [
    {
        id: 1,
        name: 'Dawid Podsiadlo na Narodowym',
        category: exampleCategories[0],
        location: 'Warszawa',
        date: new Date(2025, 8, 3),
        numberOfTicketsAvailable: 3,
        availableFrom: new Date(2025, 1, 3),
        availableTo: new Date(2025, 7, 3),
        description: 'Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakis Lorem ipsum costam przykladowy tekst jakisLorem ipsum costam przykladowy tekst jakisLorem ipsum costam przykladowy tekst jakis',
        ticketPrice: 123.99,
    },
    {
        id: 2,
        name: 'Taco Hemingway na Narodowym',
        category: exampleCategories[0],
        location: 'Warszawa',
        date: new Date(),
        numberOfTicketsAvailable: 0,
        availableFrom: new Date(2025, 1, 3),
        availableTo: new Date(2025, 5, 3),
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
        price: 123.99,
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

export const exampleProfileData: UserData = {
    firstName: 'Lucjan',
    lastName: 'Brzozowski',
    email: 'lucjan@brzoz.pl'
}