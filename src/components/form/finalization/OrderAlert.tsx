import {Button, Dialog, DialogContent} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {Actions} from "../../../actions/actions";

export const OrderAlert = () => {
    const responseMessage = useSelector((state: StoreState) => state.orderState.responseMessage);
    const dispatch = useDispatch();

    const handleAlertClose = () => {
        dispatch({type: Actions.CLEAR_ORDER_STATE})
        dispatch({type: Actions.SWITCH_VIEW, payload: 'EVENTS_LIST'})
    }

    return (
        <div>
            <Dialog open={!!responseMessage} onClose={handleAlertClose}>
                <DialogContent>
                    {responseMessage}
                    <Button variant={'text'} onClick={handleAlertClose}>Close</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}