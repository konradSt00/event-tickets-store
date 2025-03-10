import React, {ChangeEvent, MouseEvent} from "react";
import {Button, TextField, Typography} from "@mui/material";
import {DEFAULT_CURRENCY, MAX_TICKETS_PER_ORDER} from "../../../constants";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {LocalCartService} from "../../../services/LocalCartService";
import {Event} from "../../../model/Event";

const DEFAULT_NUMBER_OF_TICKETS = 1;
const ZERO_NUMBER_OF_TICKETS = 0;
const localCartService = new LocalCartService();

export interface NumberOfTicketsInputProps {
    event: Event;
    synchronizeInputWithCart?: boolean
}

export const NumberOfTicketsInput = (props: NumberOfTicketsInputProps) => {
    const {event, synchronizeInputWithCart = false} = {...props}

    const getInitialNumberOfTickets = (): number => {
        let numberOfTickets;
        if (synchronizeInputWithCart) {
            numberOfTickets = localCartService.getEventItem(event.id)?.quantity;
        }
        return numberOfTickets || DEFAULT_NUMBER_OF_TICKETS;
    }

    const [numberOfTickets, setNumberOfTickets] = React.useState(getInitialNumberOfTickets());

    const handleNumberOfTicketsChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(e.target.value);
        if (isNaN(newValue)) return;
        newValue = newValue > event.numberOfTicketsAvailable ? event.numberOfTicketsAvailable : newValue;
        if (!synchronizeInputWithCart) setNumberOfTickets(newValue)
        else {
            setNumberOfTickets(newValue);
            const alreadyAddedQuantity = localCartService.getEventItem(event.id)?.quantity || ZERO_NUMBER_OF_TICKETS;
            const numberOfTicketsChange = newValue - alreadyAddedQuantity;
            localCartService.addTicketToCart(event, numberOfTicketsChange)
        }
    }

    const handleAddToCartBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (numberOfTickets !== 0) {
            localCartService.addTicketToCart(event, numberOfTickets)
            setNumberOfTickets(ZERO_NUMBER_OF_TICKETS);
        }
    }

    const renderAddToCartBtn = () => {
        return <Button variant={'text'} onClick={handleAddToCartBtnClick}>
            <AddShoppingCartIcon/>
        </Button>
    }

    return <>
        <TextField
            onClick={e => e.stopPropagation()}
            value={numberOfTickets}
            onChange={handleNumberOfTicketsChange}
            type={'number'}
            inputProps={{
                min: ZERO_NUMBER_OF_TICKETS,
                max: Math.min(event.numberOfTicketsAvailable, MAX_TICKETS_PER_ORDER)
            }}
        />
        {!synchronizeInputWithCart && renderAddToCartBtn()}
        <Typography>
            Total: {(numberOfTickets * event.ticketPrice).toFixed(2)} {DEFAULT_CURRENCY}
        </Typography>
    </>

}