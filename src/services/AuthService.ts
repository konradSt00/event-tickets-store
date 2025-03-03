import {Roles} from "../model/Roles";

let currentRole: Roles = 'ADMIN'

export class AuthService { // TODO

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

    public static logout() {
        currentRole = 'GUEST';
    }
}