import dayjs from "dayjs";
import {DATE_FORMAT} from "../constants";
import {Event} from "../model/Event"
import {EventRq} from "../model/request/EventRq";
import {EventFormValues, FormFields} from "../model/form/event/EventFormFields";
import {EventRs} from "../model/request/EventRs";

export class EventRsRqMapper {
    public mapRs(event: EventRs): Event {
        return {
            ...event,
            category: {name: event.categoryName},
            date: this.mapStringToDate(event.date),
            availableTo: this.mapStringToDate(event.availableTo),
            availableFrom: this.mapStringToDate(event.availableFrom),
        }
    }

    public mapRq(event: EventFormValues): EventRq {
        return {
            ...event,
            imageLink: event[FormFields.IMAGE],
            id: -1,
            numberOfTicketsAvailable: event[FormFields.TICKETS_NUMBER],
            categoryId: event[FormFields.CATEGORY],
            date: event[FormFields.EVENT_DATE],
            availableTo: event[FormFields.AVAILABLE_TO],
            availableFrom: event[FormFields.AVAILABLE_FROM]
        }
    }

    private mapStringToDate(date: string): Date {
        return dayjs(date, DATE_FORMAT).toDate()
    }
}