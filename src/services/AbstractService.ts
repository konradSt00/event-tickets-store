import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {BEARER} from "../constants";

export abstract class AbstractService {
    protected static BASE_URL: string = 'http://localhost:8080/api';

    private static async genericHandleRs<Rq, Rs>(rs: Promise<AxiosResponse<Rs>>): Promise<AxiosResponse<Rs>> {
        return rs.catch((reason) => {
            console.log(reason);
            return reason;
        })
    }

    protected static post<Rq, Rs>(endpoint: string, data: Rq): Promise<AxiosResponse<Rs>> {
        return this.genericHandleRs(axios.post<Rs>(this.BASE_URL + endpoint, data, {...this.getHeaders()}))
    }

    protected static get<Rq, Rs>(endpoint: string): Promise<AxiosResponse<Rs>> {
        return this.genericHandleRs(axios.get<Rs>(this.BASE_URL + endpoint, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc0MTQxNjY4OCwiZXhwIjoxNzQxNTAzMDg4fQ.ZJ_94UwOTcXrhL1bRNa-21zK9VBN28UoArV0JWAcSDc',
                'Access-Control-Allow-Origin': '*',

            }
        }))
    }

    private static getHeaders(): AxiosRequestConfig {
        return {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                ...this.getAuthHeader()
            }
        }
    }

    private static getAuthHeader() {
        const token = localStorage.getItem(BEARER)
        const authenticated = !!token && token.startsWith(BEARER);

        return authenticated
            ? {'Authorization': token}
            : {};
    }
}