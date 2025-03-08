import {jwtDecode} from "jwt-decode";
import {Roles} from "../model/Roles";

interface DecodedToken {
    roles: Roles[];
    exp: number

}

export const getTokenRoles = (jwt: string): Roles[] => {
    try {
        const decoded = jwtDecode(jwt) as DecodedToken;
        return decoded.roles;
    } catch (error) {
        return [];
    }
}