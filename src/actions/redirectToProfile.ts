import {Actions} from "./actions";
import store from "../store/store";

export const redirectToProfile = (): void => {
    store.dispatch({
        type: Actions.SWITCH_VIEW,
        payload: 'PROFILE_VIEW'
    })
}
