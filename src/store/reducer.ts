import {Actions} from "../actions/actions";
import {StoreState} from "../model/storing/StoreState";
import {Action} from "@reduxjs/toolkit";
import {exampleProfileData} from "./MockData";

export type View = 'EVENTS_LIST' | 'FINALIZATION_VIEW' | 'PROFILE_VIEW';

const initialState: StoreState = {
    events: [],
    categories: [],
    currentView: 'EVENTS_LIST',
    profileState: {
        userData: exampleProfileData,
        historicalOrders: []
    },
    orderState: {
        responseMessage: undefined
    },
    cartState: {
        cartItems: [],
        cartOpened: false
    },
    role: 'ROLE_GUEST',
    alerts: []
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
                currentView: action.payload,
                cartState: {
                    ...state.cartState,
                    cartOpened: false
                }
            };
        case Actions.UPDATE_CART:
            return {
                ...state,
                cartState: {
                    cartOpened: !(state.currentView === 'FINALIZATION_VIEW'),
                    cartItems: action.payload
                }
            }
        case Actions.CLEAR_ORDER_STATE:
            return {
                ...state,
                orderState: {
                    responseMessage: undefined
                }
            }
        case Actions.SET_ORDER_STATUS:
            return {
                ...state,
                orderState: {
                    responseMessage: action.payload
                }
            }
        case Actions.OPEN_CART:
            return {
                ...state,
                cartState: {
                    ...state.cartState,
                    cartOpened: true
                }
            }
        case Actions.CLOSE_CART:
            return {
                ...state,
                cartState: {
                    ...state.cartState,
                    cartOpened: false
                }
            }
        case Actions.ADD_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case Actions.ADD_ROLE:
            return {
                ...state,
                role: action.payload
            }
        case Actions.ADD_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case Actions.ADD_USER_DATA:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    userData: action.payload
                }
            }
        case Actions.ADD_ORDERS:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    historicalOrders: action.payload
                }
            }
        case Actions.PUSH_ALERT:
            return {
                ...state,
                alerts: [action.payload, ...state.alerts]
            }
        case Actions.CLEAR_ALERTS:
            return {
                ...state,
                alerts: []
            }
        default:
            return state
    }
}