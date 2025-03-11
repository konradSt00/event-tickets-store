import {Typography} from "@mui/material";
import {DEFAULT_CURRENCY} from "../../../constants";
import {useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";

export const SummaryView = () => {
    const orderEvents = useSelector((state: StoreState) => state.placedOrder?.event || [])

    const getTotalPrice = () => {
        const total = orderEvents.reduce((acc, currentValue) => {
            return acc + currentValue.price * currentValue.quantity;
        }, 0)

        return `${total} ${DEFAULT_CURRENCY}`
    }

    return <div>
        <h2>Order placed successfully!</h2>
        <h4>Your order summary</h4>
        {orderEvents.map(eventOrder => {
            return <Typography>{eventOrder.name} {eventOrder.price.toFixed(2)}x{eventOrder.quantity} {(eventOrder.quantity * eventOrder.price).toFixed(2)}</Typography>
        })}
        <Typography>
            <>
                Total price: {getTotalPrice()}
            </>
        </Typography>
    </div>
}