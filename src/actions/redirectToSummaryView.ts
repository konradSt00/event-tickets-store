import {Actions} from "./actions";
import store from "../store/store";
import {Order} from "../model/order/Order";

export const redirectToSummaryView = (order: Order): void => {
    store.dispatch({
        type: Actions.ADD_PLACED_ORDER,
        payload: order
    })
    store.dispatch({
        type: Actions.SWITCH_VIEW,
        payload: 'SUMMARY_VIEW'
    })
}
