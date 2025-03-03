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
        imageLink: 'https://s6.tvp.pl/images2/f/d/6/uid_fd6ea5f5aa5f492da76b4a10e036e526_width_1200_play_0_pos_0_gs_0_height_678_stadion-pge-narodowy-w-warszawie-fot-getty-images.jpg',
        time: '11:00'
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
        imageLink: 'https://s6.tvp.pl/images2/f/d/6/uid_fd6ea5f5aa5f492da76b4a10e036e526_width_1200_play_0_pos_0_gs_0_height_678_stadion-pge-narodowy-w-warszawie-fot-getty-images.jpg',
        time: '11:00'
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