import {Roles} from "../model/Roles";
import {AbstractService} from "./AbstractService";
import {LoginRq} from "../model/request/LoginRq";
import {BEARER} from "../constants";
import {getTokenRoles, getTokenUserId} from "../util/jwtUtils";
import store from "../store/store";
import {addRole} from "../actions/addRole";
import {RegisterRq} from "../model/request/RegisterRq";
import {DialogService} from "./DialogService";
import {Actions} from "../actions/actions";

const SIGN_IN_ENDPOINT = '/auth/signin'
const SIGN_UP_ENDPOINT = '/auth/signup'

export class AuthService extends AbstractService {

    public static isUser(role: Roles) {
        return role === 'ROLE_USER';
    }

    public static isAdmin(role: Roles) {
        return role === 'ROLE_ADMIN';
    }

    public static isGuest(role: Roles) {
        return role === 'ROLE_GUEST';
    }

    public static async login(data: LoginRq) {
        return await this.post<LoginRq, string>(SIGN_IN_ENDPOINT, data)
            .then(response => {
                if (response.data.includes(BEARER)) {
                    this.handleToken(response.data);
                    DialogService.showAlertDialog({type: "success", message: "Logged in successfully"})
                }
            })
    }

    public static async register(data: RegisterRq) {
        return this.post<RegisterRq, { message: string }>(SIGN_UP_ENDPOINT, data)
            .then((response) => {
                if (response?.data?.message && response?.data?.message?.includes('success')) {
                    DialogService.showAlertDialog({
                        type: "success",
                        message: "Registered successfully! You can login now."
                    })
                }
            })

    }

    public static init() {
        const jwtToken = localStorage.getItem(BEARER);
        const roles = (jwtToken && getTokenRoles(jwtToken)) || []
        store.dispatch(addRole(roles?.length > 0 ? roles[0] : 'ROLE_GUEST'))
    }

    public static logout() {
        localStorage.removeItem(BEARER);
        AuthService.init();
        DialogService.showAlertDialog({type: "info", message: 'You have been logged out'});
        store.dispatch({type: Actions.CLEAR_USER})
    }

    public static getUserId() {
        const jwtToken = localStorage.getItem(BEARER);
        if (!jwtToken) return -1;
        return getTokenUserId(jwtToken);
    }

    private static handleToken(token: string) {
        if (!token) return
        if (token.startsWith(BEARER)) {
            localStorage.setItem(BEARER, token)
            this.init();
        }
    }
}