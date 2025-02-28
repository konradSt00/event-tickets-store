import {Alert, Button, Popover, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {CartItem} from "../../model/cart/CartItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {LocalCartService} from "../../services/LocalCartService";
import {openFinalizationView} from "../../actions/openFinalizationView";
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

    const id = !!anchorEl ? 'simple-popover' : undefined;
    return (<>
            <Button aria-describedby={id} variant="text"
                onClick={e => setAnchorEl(e.currentTarget)}
            >
                <ShoppingCartIcon/>
            </Button>
            <Popover
                id={id}
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
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
                    <Button onClick={finalizeOrder} variant={'contained'}>BUY TICKETS</Button>
                    <LoginAlert isDialogOpened={showLoginAlert} setDialogOpened={setShowLoginAlert} onClose={openFinalizationView}/>
                </>}
            </Popover>
        </>
    );
}