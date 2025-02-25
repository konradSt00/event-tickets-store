import {Event} from "../Event";
import {Category} from "../Category";
import {View} from "../../store/reducer";

export interface StoreState {
    events: Event[]
    categories: Category[]
    currentView: View
}