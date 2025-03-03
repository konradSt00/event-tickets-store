
export enum FormFields {
    NAME = 'name',
    CATEGORY = 'category',
    DESCRIPTION = 'description',
    LOCATION = 'location',
    EVENT_DATE = 'eventDate',
    TICKETS_NUMBER = 'ticketsNumber',
    TICKET_PRICE = "ticketPrice",
    AVAILABLE_FROM = 'availableFrom',
    AVAILABLE_TO = 'availableTo',
    IMAGE = 'image',
    TIME = 'time'
}

export interface EventFormValues {
    [FormFields.NAME]: string;
    [FormFields.CATEGORY]: string;
    [FormFields.DESCRIPTION]: string;
    [FormFields.LOCATION]: string;
    [FormFields.EVENT_DATE]?: string;
    [FormFields.TICKETS_NUMBER]: number;
    [FormFields.TICKET_PRICE]: number;
    [FormFields.AVAILABLE_FROM]: string;
    [FormFields.AVAILABLE_TO]: string;
    [FormFields.IMAGE]: string;
    [FormFields.TIME]: string;
}