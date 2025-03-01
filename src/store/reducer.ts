import {Actions} from "../actions/actions";
import {StoreState} from "../model/storing/StoreState";
import {Action} from "@reduxjs/toolkit";
import {exampleCategories, exampleEvents} from "./MockData";

export type View = 'EVENTS_LIST' | 'FINALIZATION_VIEW' | 'PROFILE_VIEW';

const initialState: StoreState = {
    events: exampleEvents,
    categories: exampleCategories,
    currentView: 'EVENTS_LIST'
}

export interface StoreActionType extends Action<string> {
    type: Actions;
    payload: any;
}

export const reducer = (state = initialState, action: StoreActionType): StoreState => {
    switch (action.type) {
        case Actions.SWITCH_VIEW:
            return {
                ...state,
                currentView: action.payload
            }
        default:
            return state
    }
}