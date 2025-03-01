import {Actions} from "./actions";
import store from "../store/store";

export const redirectToFinalizationView = (): void => {
    store.dispatch({
        type: Actions.SWITCH_VIEW,
        payload: 'FINALIZATION_VIEW'
    })
}
