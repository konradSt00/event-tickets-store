import store from "../store/store";
import {Actions} from "../actions/actions";
import {AbstractService} from "./AbstractService";
import {EventRsRqMapper} from "../mapper/EventRsRqMapper";
import {EventRs} from "../model/request/EventRs";
import {EventRq} from "../model/request/EventRq";

const ALL_EVENTS_ENDPOINT = '/events/all';
const CREATE_EVENT_ENDPOINT = '/events/new';
const AUTO_REFRESH_INTERVAL = 30000;
const mapper = new EventRsRqMapper();

export class EventService extends AbstractService {
    public static getAllAvailableEvents(): void {
        this.get<any, EventRs[]>(ALL_EVENTS_ENDPOINT)
            .then(response =>
                store.dispatch({
                    type: Actions.ADD_EVENTS,
                    payload: response.data?.map(event => mapper.mapRs(event))
                })).catch((reason) => console.log(reason))
    }

    public static startAutoRefreshOffers = () => {
        return setInterval(() => this.getAllAvailableEvents(), AUTO_REFRESH_INTERVAL);
    }

    public static createNewEvent(event: any) {
        return this.post<EventRq, EventRs>(CREATE_EVENT_ENDPOINT, mapper.mapRq(event))
    }
}