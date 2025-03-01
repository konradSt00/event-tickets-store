import {Button, TextField} from "@mui/material";
import {MAX_TICKETS_PER_ORDER} from "../../../constants";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {LocalCartService} from "../../../services/LocalCartService";
import React from "react";
import {Event} from "../../../model/Event";
import {OfferUnavailabilityAlert} from "./OfferUnavailabilityAlert";
import {isEventTicketAvailable} from "../../../util/eventUtils";

const localCartService = new LocalCartService();

interface RowControlsProps {
    event: Event
}

export const EventControls = (props: RowControlsProps) => {
    const {event} = {...props}
    const [numberOfTickets, setNumberOfTickets] = React.useState(1);

    const renderControls = () => {
        return <>
            <TextField
                onClick={e => e.stopPropagation()}
                value={numberOfTickets}
                onChange={e => setNumberOfTickets(parseInt(e.target.value))}
                type={'number'}
                inputProps={{min: 1, max: Math.min(event.numberOfTicketsAvailable, MAX_TICKETS_PER_ORDER)}}
            />
            <Button variant={'text'} onClick={(e) => {
                e.stopPropagation()
                localCartService.addTicketToCart(event, numberOfTickets)
            }}>
                <AddShoppingCartIcon/>
            </Button>
        </>
    }

    return isEventTicketAvailable(event)
        ? renderControls()
        : <OfferUnavailabilityAlert {...event}/>

}

export const rowControlsRenderer = (events: Event[]) => {
    return (params: any) => {
        const event = events[params.id - 1]
        return <EventControls event={event}/>
    }
}