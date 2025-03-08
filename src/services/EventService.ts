import store from "../store/store";
import {Actions} from "../actions/actions";
import {AbstractService} from "./AbstractService";
import {EventRsRqMapper} from "../mapper/EventRsRqMapper";
import {EventRqRs} from "../model/request/EventRqRs";

const ALL_EVENTS_ENDPOINT = '/events/all';
const CREATE_EVENT_ENDPOINT = '/events/new';
const mapper = new EventRsRqMapper();

export class EventService extends AbstractService {
    public static getAllAvailableEvents(): void {
        this.get<any, EventRqRs[]>(ALL_EVENTS_ENDPOINT)
            .then(response =>
                store.dispatch({
                    type: Actions.ADD_EVENTS,
                    payload: response.data?.map(event => mapper.mapRs(event))
                })).catch((reason) => console.log(reason))
    }

    public static createNewEvent(event: any) {
        this.post(CREATE_EVENT_ENDPOINT, mapper.mapRq(event))
    }
}