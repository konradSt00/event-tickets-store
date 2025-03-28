import {Alert, Badge, Button, ButtonGroup, Popover, Typography} from "@mui/material";
import {useState} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {LocalCartService} from "../../services/LocalCartService";
import {redirectToFinalizationView} from "../../actions/redirectToFinalizationView";
import {LoginAlert} from "../form/login/LoginAlert";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../model/storing/StoreState";
import {NumberOfTicketsInput} from "../form/common/NumberOfTicketsInput";
import {Actions} from "../../actions/actions";
import {AuthService} from "../../services/AuthService";
import store from "../../store/store";

const localCartService = new LocalCartService();

export const CartPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);
    const isOpened = useSelector((state: StoreState) => state.cartState.cartOpened)
    const items = useSelector((state: StoreState) => state.cartState.cartItems);
    const events = useSelector((state: StoreState) => state.events);
    const dispatch = useDispatch();

    const renderItems = () => {
        return items.map((item, index) => {
            const itemEvent = events.find(event => event.id === item.id);
            return !!itemEvent && <div className={'cart-row'} key={index}>
                <Typography sx={{p: 1}}>{item.name}</Typography>
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
        if (AuthService.isGuest(store.getState().role)) {
            setShowLoginAlert(true)
        } else {
            redirectToFinalizationView()
        }
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
    return (<span>
            <Button aria-describedby={id} variant="text"
                    onClick={e => {
                        setAnchorEl(e.currentTarget);
                        dispatch({type: Actions.OPEN_CART})
                    }}
            >
                <Badge className={'cart-button-badge'} color={'secondary'} variant={'standard'}
                       badgeContent={getNumberOfItems()}>
                    <Typography>Cart</Typography>
                    <ShoppingCartIcon fontSize={"large"}/>
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
                <div className={'cart-container'}>
                    {items?.length > 0 ? renderItems() : renderNoItemsInfo()}
                </div>
                {items?.length > 0 && <>
                    <ButtonGroup>
                        <Button onClick={clearAndCloseCart} variant={'outlined'}>CLEAR CART</Button>
                        <Button onClick={finalizeOrder} variant={'contained'}>BUY TICKETS</Button>
                    </ButtonGroup>
                    <LoginAlert isDialogOpened={showLoginAlert} setDialogOpened={setShowLoginAlert} onClose={redirectToFinalizationView}/>
                </>}
            </Popover>
        </span>
    );
}