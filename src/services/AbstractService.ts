import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {BEARER} from "../constants";
import {DialogService} from "./DialogService";

export abstract class AbstractService {
    protected static BASE_URL: string = 'http://localhost:8080/api';

    private static async genericHandleRs<Rq, Rs>(rs: Promise<AxiosResponse<Rs>>): Promise<AxiosResponse<Rs>> {
        return rs.catch((reason) => {
            DialogService.showAlertDialog({type: "error", message: reason.response.data.message})
            return reason;
        })
    }

    protected static post<Rq, Rs>(endpoint: string, data: Rq): Promise<AxiosResponse<Rs>> {
        return this.genericHandleRs(axios.post<Rs>(this.BASE_URL + endpoint, data, {...this.getHeaders()}))
    }

    protected static get<Rq, Rs>(endpoint: string): Promise<AxiosResponse<Rs>> {
        return this.genericHandleRs(axios.get<Rs>(this.BASE_URL + endpoint, {...this.getHeaders()}))
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
        const authenticated = !!token && token?.startsWith(BEARER);

        return authenticated
            ? {'Authorization': token}
            : {};
    }
}