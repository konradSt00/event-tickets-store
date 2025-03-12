import {AbstractService} from "./AbstractService";
import {AuthService} from "./AuthService";
import store from "../store/store";
import {Actions} from "../actions/actions";

const USER_DATA_ENDPOINT = '/user/'

export class UserDataService extends AbstractService {
    public static getUserData() {
        const userId = AuthService.getUserId();
        if (userId < 1) return;
        this.get(USER_DATA_ENDPOINT + userId)
            .then((response) => store.dispatch({
                type: Actions.ADD_USER_DATA,
                payload: response.data
            }))
    }
}