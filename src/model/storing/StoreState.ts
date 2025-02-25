import {Event} from "../Event";
import {Category} from "../Category";

export interface StoreState {
    events: Event[]
    categories: Category[]
}