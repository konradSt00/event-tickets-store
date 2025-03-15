import React, {MouseEvent, useEffect} from "react";
import {Button, Typography} from "@mui/material";
import {DEFAULT_CURRENCY, MAX_TICKETS_PER_ORDER} from "../../../constants";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {LocalCartService} from "../../../services/LocalCartService";
import {Event} from "../../../model/Event";
import {useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {Unstable_NumberInput as BaseNumberInput,} from '@mui/base/Unstable_NumberInput';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {StyledInput, StyledInputRoot} from "./styled/StyledInput";
import {StyledButton} from "./styled/StyledButton";

const DEFAULT_NUMBER_OF_TICKETS = 1;
const ZERO_NUMBER_OF_TICKETS = 0;
const localCartService = new LocalCartService();

export interface NumberOfTicketsInputProps {
    event: Event;
    synchronizeInputWithCart?: boolean
    withTotal?: boolean;
}

export const NumberOfTicketsInput = (props: NumberOfTicketsInputProps) => {
    const {event, synchronizeInputWithCart = false, withTotal = true} = {...props}

    const cartItemQuantity = useSelector((state: StoreState) => {
        if (synchronizeInputWithCart) {
            return state.cartState.cartItems.find(item => item.id === event.id)?.quantity
        }
        return 0;
    });

    useEffect(() => {
        if (synchronizeInputWithCart) {
            setNumberOfTickets(cartItemQuantity || 0)
        }
    }, [cartItemQuantity]);

    const getInitialNumberOfTickets = (): number => {
        let numberOfTickets;
        if (synchronizeInputWithCart) {
            numberOfTickets = cartItemQuantity;
        }
        return numberOfTickets || DEFAULT_NUMBER_OF_TICKETS;
    }

    const [numberOfTickets, setNumberOfTickets] = React.useState(getInitialNumberOfTickets());

    const handleNumberOfTicketsChange = (newValue: number | null) => {
        if (newValue == null || isNaN(newValue)) return;
        newValue = newValue > event.numberOfTicketsAvailable ? event.numberOfTicketsAvailable : newValue;
        if (!synchronizeInputWithCart) setNumberOfTickets(newValue)
        else {
            setNumberOfTickets(newValue);
            const alreadyAddedQuantity = cartItemQuantity || ZERO_NUMBER_OF_TICKETS;
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
        return <Button aria-label={'add to cart'} variant={'text'} onClick={handleAddToCartBtnClick}>
            <AddShoppingCartIcon/>
        </Button>
    }

    return <>
        <div className={'d-inline-block'}>
            <BaseNumberInput
                aria-label={'number of tickets'}
                onClick={(event) => event.stopPropagation()}
                min={ZERO_NUMBER_OF_TICKETS}
                value={numberOfTickets}
                max={Math.min(event.numberOfTicketsAvailable, MAX_TICKETS_PER_ORDER)}
                onChange={(event, newValue) => handleNumberOfTicketsChange(newValue)}
                slots={{
                    root: StyledInputRoot,
                    input: StyledInput,
                    incrementButton: StyledButton,
                    decrementButton: StyledButton,
                }}
                slotProps={{
                    incrementButton: {
                        children: <AddIcon fontSize="small"/>,
                        className: 'increment',
                    },
                    decrementButton: {
                        children: <RemoveIcon fontSize="small"/>,
                        className: 'decrement'
                    },
                }}
                {...props}
            />
        </div>
        <div className={'d-inline-block'}>
            {!synchronizeInputWithCart && renderAddToCartBtn()}
        </div>
        {withTotal && <Typography>
            Total: {(numberOfTickets * event.ticketPrice).toFixed(2)} {DEFAULT_CURRENCY}
        </Typography>}
    </>

}