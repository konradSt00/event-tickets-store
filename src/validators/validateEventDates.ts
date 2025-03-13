import {FieldValues, Validate, ValidateResult} from "react-hook-form";
import {FormFields} from "../model/form/event/EventFormFields";
import dayjs from "dayjs";
import {DATE_FORMAT} from "../constants";

export const validateEventDate: Validate<string, FieldValues> = (eventDate: string): ValidateResult => {
    if (isFutureDate(dayjs(eventDate, DATE_FORMAT))) return undefined;
    return 'Event date cannot be past date'
}

export const validateAvailableFromDate: Validate<string, FieldValues> = (availableFrom: string, formValues: FieldValues): ValidateResult => {
    const availableToDate = dayjs(formValues[FormFields.AVAILABLE_TO], DATE_FORMAT);
    const availableFromDate = dayjs(availableFrom, DATE_FORMAT);
    if (availableFromDate.isAfter(availableToDate)) return 'Sale beginning cannot be after its end';
    if (!isFutureDate(availableFromDate)) return undefined;
    else return 'Sale beginning cannot be a past date';
}

export const validateAvailableToDate: Validate<string, FieldValues> = (availableTo: string, formValues: FieldValues): ValidateResult => {
    const eventDate = dayjs(formValues[FormFields.EVENT_DATE], DATE_FORMAT);
    const availableToDate = dayjs(availableTo, DATE_FORMAT);
    if (!availableToDate.isBefore(eventDate)) return 'Sale end cannot be after event date';
    if (isFutureDate(availableToDate)) return undefined;
    else return 'Sale end cannot be a past date';
}

const isFutureDate = (date: dayjs.Dayjs): boolean => {
    return date.isAfter(dayjs(), 'days')
}