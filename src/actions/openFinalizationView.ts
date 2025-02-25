import {StoreActionType, View} from "../store/reducer";
import {Actions} from "./actions";
import {AuthService} from "../services/AuthService";
import store from "../store/store";

export const openFinalizationView = (): void => {
    encourageToLogin()
    store.dispatch({
        type: Actions.SWITCH_VIEW,
        payload: 'FINALIZATION_VIEW'
    })
}

const encourageToLogin = () => {
    if(!AuthService.isGuest()) return;


}
