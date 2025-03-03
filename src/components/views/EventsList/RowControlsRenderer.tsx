import React from "react";
import {Event} from "../../../model/Event";
import {OfferUnavailabilityAlert} from "./OfferUnavailabilityAlert";
import {isEventTicketAvailable} from "../../../util/eventUtils";
import {NumberOfTicketsInput} from "../../form/common/NumberOfTicketsInput";


interface RowControlsProps {
    event: Event
}

export const EventControls = (props: RowControlsProps) => {
    const event = props.event;

    return isEventTicketAvailable(event)
        ? <NumberOfTicketsInput event={event}/>
        : <OfferUnavailabilityAlert {...event}/>

}

export const rowControlsRenderer = (events: Event[]) => {
    return (params: any) => {
        const event = events[params.id - 1]
        return <EventControls event={event}/>
    }
}