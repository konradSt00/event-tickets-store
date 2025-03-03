import {FinalizationForm} from "../form/finalization/FinalizationForm";
import {LocalCartService} from "../../services/LocalCartService";
import {NumberOfTicketsInput} from "../form/common/NumberOfTicketsInput";
import {useSelector} from "react-redux";
import {StoreState} from "../../model/storing/StoreState";

const localCartService =  new LocalCartService();

export const FinalizationView = () => {
    const cartItems = useSelector((state: StoreState) => state.cartItems);
    const allEvents = useSelector((state: StoreState) => state.events);

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
        <div>
            <h3>Please provide your data</h3>
            <FinalizationForm onSubmitAction={() => localCartService.clearCart()}/>
        </div>
    </div>
}