import {EventOrder} from "./EventOrder";

export interface Order {
    id: string,
    event: EventOrder[],
    date: string
}