import {jwtDecode} from "jwt-decode";
import {Roles} from "../model/Roles";

interface DecodedToken {
    roles: Roles[];
    exp: number,
    userId: number
}

export const getTokenRoles = (jwt: string): Roles[] => {
    try {
        return jwtDecode<DecodedToken>(jwt).roles;
    } catch (error) {
        return [];
    }
}

export const getTokenUserId = (jwt: string): number => {
    try {
        return jwtDecode<DecodedToken>(jwt).userId;
    } catch (error) {
        return -1;
    }
}