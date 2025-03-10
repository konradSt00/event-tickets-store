import {InputField} from "../common/InputField";
import React from "react";
import {FormFields} from "../../../model/form/event/EventFormFields";
import {EventDateField} from "./EventDateField";
import CategorySelectField from "../category/CategorySelectField";
import {
    validateAvailableFromDate,
    validateAvailableToDate,
    validateEventDate
} from "../../../validators/validateEventDates";

export const EventFields = () => {
    return <>
        <InputField fieldName={FormFields.NAME} maxLength={30}/>
        <InputField fieldName={FormFields.DESCRIPTION} maxLength={999}/>
        <InputField fieldName={FormFields.LOCATION} maxLength={100}/>
        <InputField fieldName={FormFields.IMAGE} maxLength={1000}/>
        <InputField fieldName={FormFields.TIME} type={'time'}/>
        <InputField fieldName={FormFields.TICKET_PRICE} type={"number"}/>
        <EventDateField fieldName={FormFields.EVENT_DATE} validate={validateEventDate}
                        minDate={FormFields.AVAILABLE_TO}/>
        <InputField fieldName={FormFields.TICKETS_NUMBER} type={"number"} />
        <EventDateField fieldName={FormFields.AVAILABLE_FROM} validate={validateAvailableFromDate}/>
        <EventDateField fieldName={FormFields.AVAILABLE_TO} validate={validateAvailableToDate}
                        minDate={FormFields.AVAILABLE_FROM}/>
        <CategorySelectField fieldName={FormFields.CATEGORY}/>
    </>
}