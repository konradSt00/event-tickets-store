import {DialogButton} from "./DialogButton";
import {AddEventDialog} from "./form/event/AddEventDialog";
import {AddCategoryDialog} from "./form/category/AddCategoryDialog";
import {CartPopover} from "./cart/CartPopover";
import {AuthService} from "../services/AuthService";
import {Button} from "@mui/material";
import {LoginButton} from "./form/login/LoginButton";
import {RegisterButton} from "./form/register/RegisterButton";


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

    const renderGuestButtons = () => {
        return AuthService.isGuest()
            ? <>
                <LoginButton/>
                <RegisterButton/>
            </>
            : null;
    }

    return <div className={'app-bar-container'}>
        {renderAdminToolsIfAuthorized()}
        {renderGuestButtons()}
        {!AuthService.isGuest() &&
            <Button onClick={AuthService.logout} variant={"contained"}>Logout</Button>}
        <CartPopover/>
    </div>
}