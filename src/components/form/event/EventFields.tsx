import {InputField} from "../common/InputField";
import React from "react";
import {FormFields} from "../../../model/form/event/EventFormFields";
import {EventDateField} from "./EventDateField";
import CategorySelectField from "../category/CategorySelectField";

export const EventFields = () => {
    return <>
        <InputField fieldName={FormFields.NAME} maxLength={30}/>
        <InputField fieldName={FormFields.DESCRIPTION} maxLength={999}/>
        <InputField fieldName={FormFields.LOCATION} maxLength={100}/>
        <InputField fieldName={FormFields.TICKET_PRICE} type={"number"}/>
        <EventDateField fieldName={FormFields.EVENT_DATE}/>
        <InputField fieldName={FormFields.TICKETS_NUMBER} type={"number"} />
        <EventDateField fieldName={FormFields.AVAILABLE_FROM}/>
        <EventDateField fieldName={FormFields.AVAILABLE_TO}/>
        <CategorySelectField fieldName={FormFields.CATEGORY}/>
    </>
}