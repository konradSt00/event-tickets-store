import {Button, List, ListItem} from "@mui/material";
import {connect} from "react-redux";
import {StoreState} from "../../model/storing/StoreState";
import {StoreActionType} from "../../store/reducer";
import {Event} from "../../model/Event";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {LocalCartService} from "../../services/LocalCartService";

interface ListViewProps {
    events: Event[]
}

interface ListViewActions {

}

const localCartService = new LocalCartService();

const ListViewComponent = (props: ListViewProps) => {
    const renderEventItem = (event: Event, index: number) => {
        return <ListItem key={index} className={'list-item-container'}>
            <div className={'event-item'}>
                <label>{event.name}</label>
                <label>Tickets available: {event.numberOfTicketsAvailable}</label>
            </div>
            <Button variant={'text'} onClick={() => localCartService.addTicketToCart(event)}>
                <AddShoppingCartIcon/>
            </Button>
        </ListItem>
    }

    return <List sx={{ width: '95%' }}>
        {props.events.map(renderEventItem)}
    </List>
}

const mapStateToProps = (state: StoreState): ListViewProps => {
    return {...state}
}

const mapDispatchToProps = (dispatch: (action: StoreActionType) => void): ListViewActions => {
    return {}
}

const ListView = connect(mapStateToProps, mapDispatchToProps)(ListViewComponent);

export default ListView