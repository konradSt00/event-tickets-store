import {Roles} from "../model/Roles";
import {AbstractService} from "./AbstractService";
import {LoginRq} from "../model/request/LoginRq";
import {BEARER} from "../constants";

let currentRole: Roles = 'GUEST'
const SIGN_IN_ENDPOINT = '/auth/signin'

export class AuthService extends AbstractService { // TODO

    public static getUserRole(): Roles {
        return currentRole;
    }

    public static isUser() {
        return AuthService.getUserRole() === 'USER';
    }

    public static isAdmin() {
        return AuthService.getUserRole() === 'ADMIN';
    }

    public static isGuest() {
        return AuthService.getUserRole() === 'GUEST';
    }

    public static async login(data: LoginRq) {
        return await this.post<LoginRq, string>(SIGN_IN_ENDPOINT, data)
            .then(response => this.handleToken(response.data))
    }

    public static logout() {
        currentRole = 'GUEST';
    }

    private static handleToken(token: string) {
        if (token.startsWith(BEARER)) {
            localStorage.setItem(BEARER, token)
        }
    }
}