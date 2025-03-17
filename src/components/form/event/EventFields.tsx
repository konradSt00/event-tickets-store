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
import {validatePositiveNumber} from "../../../validators/validatePositiveNumber";

export const EventFields = () => {
    return <>
        <InputField fieldName={FormFields.NAME} maxLength={30}/>
        <InputField fieldName={FormFields.DESCRIPTION} maxLength={999}/>
        <InputField fieldName={FormFields.LOCATION} maxLength={100}/>
        <InputField fieldName={FormFields.IMAGE} maxLength={1000}/>
        <InputField fieldName={FormFields.TIME} type={'time'}/>
        <InputField fieldName={FormFields.TICKET_PRICE} fieldLabel={'ticket price'} type={"number"}
                    validate={validatePositiveNumber}/>
        <EventDateField fieldName={FormFields.EVENT_DATE} validate={validateEventDate}
                        minDate={FormFields.AVAILABLE_TO} label={'Event date'}/>
        <InputField fieldName={FormFields.TICKETS_NUMBER} fieldLabel={'number of tickets'} type={"number"}
                    validate={validatePositiveNumber}/>
        <EventDateField fieldName={FormFields.AVAILABLE_FROM} validate={validateAvailableFromDate}
                        label={'Tickets available from'}/>
        <EventDateField fieldName={FormFields.AVAILABLE_TO} validate={validateAvailableToDate}
                        minDate={FormFields.AVAILABLE_FROM} label={'Tickets available to'}/>
        <CategorySelectField fieldName={FormFields.CATEGORY}/>
    </>
}