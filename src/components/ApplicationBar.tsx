import {DialogButton} from "./DialogButton";
import {AddEventDialog} from "./form/event/AddEventDialog";
import {AddCategoryDialog} from "./form/category/AddCategoryDialog";
import {LoginDialog} from "./form/login/LoginDialog";
import {RegisterDialog} from "./form/register/RegisterDialog";
import {CartPopover} from "./cart/CartPopover";
import {AuthService} from "../services/AuthService";
import {Button} from "@mui/material";


export const ApplicationBar = () => {

    const renderAdminToolsIfAuthorized = () => {
        return AuthService.isAdmin() && <>
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

    return <div className={'app-bar-container'}>
        {renderAdminToolsIfAuthorized()}
        {AuthService.isGuest() &&
            <DialogButton buttonLabel={'Login'} dialog={LoginDialog} dialogProps={{dialogTitle: 'Login'}}/>}
        {AuthService.isGuest() &&
            <DialogButton buttonLabel={'Register'} dialog={RegisterDialog} dialogProps={{dialogTitle: 'Register'}}/>}
        {!AuthService.isGuest() &&
            <Button onClick={AuthService.logout} variant={"contained"}>Logout</Button>}
        <CartPopover/>
    </div>
}