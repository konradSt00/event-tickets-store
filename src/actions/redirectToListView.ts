import {Actions} from "./actions";
import store from "../store/store";

export const redirectToListView = (): void => {
    store.dispatch({
        type: Actions.SWITCH_VIEW,
        payload: 'LIST_VIEW'
    })
}
