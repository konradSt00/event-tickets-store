import {Event} from "../model/Event"
import store from "../store/store";
import {Actions} from "../actions/actions";
import dayjs from "dayjs";
import {DATE_FORMAT} from "../constants";
import {AbstractService} from "./AbstractService";

const ALL_EVENTS_ENDPOINT = '/events/all';

export class EventService extends AbstractService {

    public static getAllAvailableEvents(): void {
        this.get<any, Event[]>(ALL_EVENTS_ENDPOINT)
            .then(response =>
                store.dispatch({
                    type: Actions.ADD_EVENTS,
                    payload: response.data?.map(event => {
                        return {
                            ...event, // TODO reformat
                            date: dayjs(event.date, DATE_FORMAT).toDate(),
                            availableFrom: dayjs(event.availableFrom, DATE_FORMAT).toDate(),
                            availableTo: dayjs(event.availableTo, DATE_FORMAT).toDate()
                        }
                    })
                })).catch((reason) => console.log(reason))
    }
}