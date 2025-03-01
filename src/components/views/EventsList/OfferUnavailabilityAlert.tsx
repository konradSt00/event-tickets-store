import {Event} from "../../../model/Event";
import Alert from '@mui/material/Alert';
import {saleEnded, saleNotStartedYet, soldOut} from "../../../util/eventUtils";

export const OfferUnavailabilityAlert = (event: Event) => {

    switch (true) {
        case saleNotStartedYet(event):
            return <Alert severity="warning">Sale has not started yet!</Alert>;
        case saleEnded(event):
            return <Alert severity="warning">Sale has ended!</Alert>;
        case soldOut(event):
            return <Alert severity="error">SOLD OUT</Alert>;
        default:
            return null;

    }
}