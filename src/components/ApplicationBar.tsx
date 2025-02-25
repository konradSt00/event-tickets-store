import {DialogButton} from "./DialogButton";
import {AddEventDialog} from "./form/event/AddEventDialog";
import {AddCategoryDialog} from "./form/category/AddCategoryDialog";
import {LoginDialog} from "./form/login/LoginDialog";
import {RegisterDialog} from "./form/register/RegisterDialog";

export const ApplicationBar = () => {
    return <div className={'app-bar-container'}>
        <DialogButton buttonLabel={'Add new event'} dialog={AddEventDialog} dialogProps={{dialogTitle: 'Add New Event'}}/>
        <DialogButton buttonLabel={'Add new category'} dialog={AddCategoryDialog} dialogProps={{dialogTitle: 'Add New Category'}}/>
        <DialogButton buttonLabel={'Login'} dialog={LoginDialog} dialogProps={{dialogTitle: 'Login'}}/>
        <DialogButton buttonLabel={'Register'} dialog={RegisterDialog} dialogProps={{dialogTitle: 'Register'}}/>
    </div>
}