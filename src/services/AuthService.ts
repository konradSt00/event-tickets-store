import {Roles} from "../model/Roles";
import {AbstractService} from "./AbstractService";
import {LoginRq} from "../model/request/LoginRq";
import {BEARER} from "../constants";
import {getTokenRoles} from "../util/jwtUtils";
import store from "../store/store";
import {addRole} from "../actions/addRole";
import {RegisterRq} from "../model/request/RegisterRq";

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
            .then(response => this.handleToken(response.data))
    }

    public static async register(data: RegisterRq) {
        return await this.post<RegisterRq, string>(SIGN_UP_ENDPOINT, data)
    }

    public static init() {
        const jwtToken = localStorage.getItem(BEARER);
        const roles = (jwtToken && getTokenRoles(jwtToken)) || []
        store.dispatch(addRole(roles?.length > 0 ? roles[0] : 'ROLE_GUEST'))
    }

    public static logout() {
        localStorage.removeItem(BEARER);
        AuthService.init();
    }

    private static handleToken(token: string) {
        if (!token) return
        if (token.startsWith(BEARER)) {
            localStorage.setItem(BEARER, token)
            this.init();
        }
    }
}