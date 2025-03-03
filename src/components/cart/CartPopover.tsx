import {Alert, Badge, Button, Popover, Typography} from "@mui/material";
import {useState} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {LocalCartService} from "../../services/LocalCartService";
import {redirectToFinalizationView} from "../../actions/redirectToFinalizationView";
import {LoginAlert} from "../form/login/LoginAlert";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../model/storing/StoreState";
import {NumberOfTicketsInput} from "../form/common/NumberOfTicketsInput";
import {Actions} from "../../actions/actions";

const localCartService = new LocalCartService();

export const CartPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);
    const isOpened = useSelector((state: StoreState) => state.cartState.cartOpened)
    const items = useSelector((state: StoreState) => state.cartState.cartItems);
    const events = useSelector((state: StoreState) => state.events);
    const dispatch = useDispatch();

    const renderItems = () => {
        return items.map(item => {
            const itemEvent = events.find(event => event.id === item.id);
            return !!itemEvent && <div>
                <Typography sx={{p: 2}}>{item.name}</Typography>
                <NumberOfTicketsInput
                    event={itemEvent}
                    synchronizeInputWithCart={true}
                />
            </div>
        })
    }

    const renderNoItemsInfo = () => {
        return <Alert severity="info">There is no event in cart.</Alert>;
    }

    const finalizeOrder = () => {
        setShowLoginAlert(true)
    }

    const closeCart = () => {
        dispatch({type: Actions.CLOSE_CART})
    }

    const clearAndCloseCart = () => {
        closeCart();
        localCartService.clearCart();
    }

    const getNumberOfItems = () => {
        return items.reduce((sum, curr) => {
            return sum + curr.quantity
        }, 0)
    }

    const id = isOpened ? 'simple-popover' : undefined;
    return (<>
            <Button aria-describedby={id} variant="text"
                    onClick={e => {
                        setAnchorEl(e.currentTarget);
                        dispatch({type: Actions.OPEN_CART})
                    }}
            >
                <Badge color={'secondary'} variant={'standard'} badgeContent={getNumberOfItems()}>
                    <ShoppingCartIcon/>
                </Badge>
            </Button>
            <Popover
                id={id}
                open={isOpened && !!anchorEl}
                anchorEl={anchorEl}
                onClose={closeCart}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {items?.length > 0 ? renderItems() : renderNoItemsInfo()}
                {items?.length > 0 && <>
                    <Button onClick={clearAndCloseCart} variant={'outlined'}>CLEAR CART</Button>
                    <Button onClick={finalizeOrder} variant={'contained'}>BUY TICKETS</Button>
                    <LoginAlert isDialogOpened={showLoginAlert} setDialogOpened={setShowLoginAlert} onClose={redirectToFinalizationView}/>
                </>}
            </Popover>
        </>
    );
}