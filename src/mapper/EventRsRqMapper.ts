import dayjs from "dayjs";
import {DATE_FORMAT} from "../constants";
import {Event} from "../model/Event"
import {EventRqRs} from "../model/request/EventRqRs";
import {EventFormValues, FormFields} from "../model/form/event/EventFormFields";

export class EventRsRqMapper {
    public mapRs(event: EventRqRs): Event {
        return {
            ...event,
            date: this.mapStringToDate(event.date),
            availableTo: this.mapStringToDate(event.availableTo),
            availableFrom: this.mapStringToDate(event.availableFrom),
        }
    }

    public mapRq(event: EventFormValues): EventRqRs {
        return {
            ...event,
            imageLink: event[FormFields.IMAGE],
            id: -1,
            numberOfTicketsAvailable: event[FormFields.TICKETS_NUMBER],
            category: {id: event[FormFields.CATEGORY]},
            date: event[FormFields.EVENT_DATE],
            availableTo: event[FormFields.AVAILABLE_TO],
            availableFrom: event[FormFields.AVAILABLE_FROM]
        }
    }

    private mapStringToDate(date: string): Date {
        return dayjs(date, DATE_FORMAT).toDate()
    }
}