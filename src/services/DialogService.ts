import {DialogAlert} from "../model/storing/DialogAlert";
import store from "../store/store";
import {Actions} from "../actions/actions";

export class DialogService {
    public static showAlertDialog(alert: DialogAlert) {
        store.dispatch({type: Actions.PUSH_ALERT, payload: alert})
    }

    public static clearAlerts() {
        store.dispatch({type: Actions.CLEAR_ALERTS})
    }
}