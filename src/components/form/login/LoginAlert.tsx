import {Button, Dialog, DialogContent} from "@mui/material";
import {LoginButton} from "./LoginButton";
import {RegisterButton} from "../register/RegisterButton";

interface LoginAlertProps {
    setDialogOpened: (open: boolean) => void;
    isDialogOpened: boolean;
    onClose: () => void;
}

export const LoginAlert = (props: LoginAlertProps) => {
    const {isDialogOpened, setDialogOpened, onClose} = {...props};

    const handleDialogClose = () => {
        setDialogOpened(false);
        onClose();
    }

    return (
        <div>
            <Dialog open={isDialogOpened}>
                <DialogContent>
                    <LoginButton onSuccessLogin={handleDialogClose} variant={'text'}/>/
                    <RegisterButton variant={'text'}/>
                    or continue as
                    <Button variant={'text'} onClick={handleDialogClose}>guest</Button></DialogContent>
            </Dialog>
        </div>
    );
}