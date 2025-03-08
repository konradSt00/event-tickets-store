import {DialogButton} from "./DialogButton";
import {AddEventDialog} from "./form/event/AddEventDialog";
import {AddCategoryDialog} from "./form/category/AddCategoryDialog";
import {CartPopover} from "./cart/CartPopover";
import {AuthService} from "../services/AuthService";
import {Button} from "@mui/material";
import {LoginButton} from "./form/login/LoginButton";
import {RegisterButton} from "./form/register/RegisterButton";
import PersonIcon from '@mui/icons-material/Person';
import {redirectToProfile} from "../actions/redirectToProfile";
import {useSelector} from "react-redux";
import {StoreState} from "../model/storing/StoreState";
import {useEffect} from "react";

export const ApplicationBar = () => {
    useEffect(() => {
        AuthService.init()

    }, []);
    const role = useSelector((state: StoreState) => state.role)

    const renderAdminToolsIfAuthorized = () => {
        return AuthService.isAdmin(role) && <>
            <DialogButton
                buttonLabel={'Add new event'}
                dialog={AddEventDialog}
                dialogProps={{dialogTitle: 'Add New Event'}}/>

            <DialogButton
                buttonLabel={'Add new category'}
                dialog={AddCategoryDialog}
                dialogProps={{dialogTitle: 'Add New Category'}}/>
        </>
    }

    const renderGuestButtons = () => {
        return AuthService.isGuest(role)
            ? <>
                <LoginButton/>
                <RegisterButton/>
            </>
            : null;
    }

    return <div className={'app-bar-container'}>
        {renderAdminToolsIfAuthorized()}
        {renderGuestButtons()}
        {!AuthService.isGuest(role) && <>
                <Button onClick={AuthService.logout} variant={"contained"}>Logout</Button>
                <Button onClick={redirectToProfile}><PersonIcon/></Button>
            </>
        }
        <CartPopover/>
    </div>
}