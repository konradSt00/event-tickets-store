import {RegisterDialog} from "./RegisterDialog";
import {DialogButton} from "../../DialogButton";
import {ButtonOwnProps} from "@mui/material/Button/Button";

export const RegisterButton = (props: ButtonOwnProps) => {
    return <DialogButton
        {...props}
        buttonLabel={'Register'}
        dialog={RegisterDialog}
        dialogProps={{dialogTitle: 'Register'}}
    />;
}