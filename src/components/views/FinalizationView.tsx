import {FinalizationForm} from "../form/finalization/FinalizationForm";
import {LocalCartService} from "../../services/LocalCartService";
import {NumberOfTicketsInput} from "../form/common/NumberOfTicketsInput";
import {useSelector} from "react-redux";
import {StoreState} from "../../model/storing/StoreState";
import {DEFAULT_CURRENCY} from "../../constants";
import {OrderService} from "../../services/OrderService";
import {buildOrderRq} from "../../util/orderUtil";
import {useEffect} from "react";
import {EventService} from "../../services/EventService";
import {CartItem} from "../../model/cart/CartItem";

const localCartService =  new LocalCartService();

export const FinalizationView = () => {
    const cartItems = useSelector((state: StoreState) => state.cartState.cartItems);
    const allEvents = useSelector((state: StoreState) => state.events);
    const profileData = useSelector((state: StoreState) => state.profileState.userData);


    useEffect(() => {
        const intervalId = EventService.startAutoRefreshOffers()
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        let cartStateChanged = false;
        cartItems.forEach(item => {
            cartStateChanged = checkAndCorrectIfCartStateChanged(item)
        })
        if (cartStateChanged) console.log('Cart state change! Check your order.')
    }, [allEvents]);

    const checkAndCorrectIfCartStateChanged = (item: CartItem) => {
        const itemEvent = allEvents.find(event => event.id === item.id);
        if (!!itemEvent) {
            const ticketsLeft = (itemEvent.numberOfTicketsAvailable || 0) - item.quantity;
            if (ticketsLeft < 0) {
                localCartService.removeTicketFromCart(itemEvent, -1 * ticketsLeft)
                return true;
            }
        }
        return false;
    }

    const getAmountToPay = () => {
        let total = 0;
        cartItems.forEach(item => {
            const eventPrice = allEvents.find(event => event.id === item.id)?.ticketPrice || 0;
            total += eventPrice * item.quantity;
        })
        return total.toFixed(2);
    }

    return <div className={'finalization-view-container'}>
        <h1>Finish your order</h1>
        <div className={'order-summary-container'}>
            <h3>Order summary</h3>
            {cartItems.map(item => {
                const event = allEvents.find(event => event.id === item.id);
                return !!event && <span>
                    {`${item.name}   x`}
                    <NumberOfTicketsInput event={event} synchronizeInputWithCart={true}/>
                </span>
            })}
        </div>
        <span>Amount to pay: {getAmountToPay()} {DEFAULT_CURRENCY}</span>
        <div>
            <h3>Please provide your data</h3>
            <FinalizationForm onSubmitAction={() => {
                OrderService.createOrder(buildOrderRq(cartItems, profileData.email))
                localCartService.clearCart()
            }}/>
        </div>
    </div>
}