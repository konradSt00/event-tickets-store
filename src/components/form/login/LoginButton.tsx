import {LoginDialog} from "./LoginDialog";
import {DialogButton} from "../../DialogButton";
import {ButtonOwnProps} from "@mui/material/Button/Button";

interface LoginButtonProps extends ButtonOwnProps {
    onSuccessLogin?: () => void;
}

export const LoginButton = (props: LoginButtonProps) => {
    return <DialogButton
        {...props}
        buttonLabel={'Login'}
        dialog={LoginDialog}
        dialogProps={{dialogTitle: 'Login', onSuccessLogin: props.onSuccessLogin}}
    />
}