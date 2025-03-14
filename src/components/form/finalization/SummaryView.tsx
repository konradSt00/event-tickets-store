import {Button, Typography} from "@mui/material";
import {DEFAULT_CURRENCY} from "../../../constants";
import {useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {redirectToListView} from "../../../actions/redirectToListView";

export const SummaryView = () => {
    const orderEvents = useSelector((state: StoreState) => state.placedOrder?.event || [])

    const getTotalPrice = () => {
        const total = orderEvents.reduce((acc, currentValue) => {
            return acc + currentValue.price * currentValue.quantity;
        }, 0)

        return `${total} ${DEFAULT_CURRENCY}`
    }

    return <div className={'order-result-summary'}>
        <h2>Order placed successfully!</h2>
        <h4>Your order summary</h4>
        {orderEvents.map(eventOrder => {
            return <Typography>{`${eventOrder.name} ${eventOrder.price.toFixed(2)} ${DEFAULT_CURRENCY}  x  ${eventOrder.quantity}    ( total: ${(eventOrder.quantity * eventOrder.price).toFixed(2)} ${DEFAULT_CURRENCY})`}</Typography>
        })}
        <Typography>
            <>
                Total price: {getTotalPrice()}
            </>
        </Typography>
        <Button onClick={redirectToListView}>Return to all Events</Button>
    </div>
}