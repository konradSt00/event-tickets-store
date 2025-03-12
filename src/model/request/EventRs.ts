export interface EventRs {
    id: number,
    name: string,
    categoryName: string,
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