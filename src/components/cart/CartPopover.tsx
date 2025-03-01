import {Alert, Badge, Button, Popover, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {CartItem} from "../../model/cart/CartItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {LocalCartService} from "../../services/LocalCartService";
import {redirectToFinalizationView} from "../../actions/redirectToFinalizationView";
import {LoginAlert} from "../form/login/LoginAlert";

const localCartService = new LocalCartService();

export const CartPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [items, setItems] = useState<CartItem[]>(localCartService.getAllItems())
    const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);

    useEffect(() => {
        if(!!anchorEl) {
            setItems(localCartService.getAllItems);
        }
    }, [anchorEl])

    const renderItems = () => {
        return items.map(item => {
            return <Typography sx={{ p: 2 }}>{item.name}  {item.quantity}</Typography>;
        })
    }

    const renderNoItemsInfo = () => {
        return <Alert severity="info">There is no event in cart.</Alert>;
    }

    const finalizeOrder = () => {
        setShowLoginAlert(true)
    }

    const closeCart = () => {
        setAnchorEl(null)
    }

    const clearAndCloseCart = () => {
        closeCart();
        localCartService.clearCart();
    }

    // useEffect(() => { TODO
    //     setItems(localCartService.getAllItems())
    // }, [localCartService.getAllItems()]);

    const getNumberOfItems = () => {
        return items.reduce((sum, curr) => {
            return sum + curr.quantity
        }, 0)
    }

    const id = !!anchorEl ? 'simple-popover' : undefined;
    return (<>
            <Button aria-describedby={id} variant="text"
                onClick={e => setAnchorEl(e.currentTarget)}
            >
                <Badge color={'secondary'} variant={'standard'} badgeContent={getNumberOfItems()}>
                    <ShoppingCartIcon/>
                </Badge>
            </Button>
            <Popover
                id={id}
                open={!!anchorEl}
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