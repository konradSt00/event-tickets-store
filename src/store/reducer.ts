import {Actions} from "./actions";
import {StoreState} from "../model/storing/StoreState";
import {Action} from "@reduxjs/toolkit";
import {exampleCategories, exampleEvents} from "./MockData";


const initialState: StoreState = {
    events: exampleEvents,
    categories: exampleCategories
}

export interface StoreActionType extends Action<string> {
    type: Actions;
    payload: any;
}

export const reducer = (state = initialState, action: StoreActionType): StoreState => {
    switch (action.type) {
        // case Actions.ADD_NEW_EVENT:
        //     return pushEvent(state, action.payload)
        default:
            return state
    }
}