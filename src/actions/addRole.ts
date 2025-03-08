import {Actions} from "./actions";
import {Roles} from "../model/Roles";

export const addRole = (role: Roles) => {
    return {
        type: Actions.ADD_ROLE,
        payload: role
    }
}