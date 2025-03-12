export interface EventRq {
    id: number,
    name: string,
    categoryId: string,
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