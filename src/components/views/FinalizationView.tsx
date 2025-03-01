import {FinalizationForm} from "../form/OrderFinalizationForm/FinalizationForm";
import {LocalCartService} from "../../services/LocalCartService";

interface FinalizationViewProps {

}

const localCartService =  new LocalCartService();

export const FinalizationView = (props: FinalizationViewProps) => {
    return <div className={'finalization-view-container'}>
        <h1>Finish your order</h1>
        <div className={'order-summary-container'}>
            <h3>Order summary</h3>
            {localCartService.getAllItems().map(item => {
                return <span>{`${item.name}   x${item.quantity}`}</span>
            })}
        </div>
        <div>
            <h3>Please provide your data</h3>
            <FinalizationForm onSubmitAction={() => localCartService.clearCart()}/>
        </div>
    </div>
}