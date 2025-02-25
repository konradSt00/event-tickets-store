import {Button} from "@mui/material";
import React from "react";
import {DialogProps, GeneralDialogProps} from "../model/form/dialogs/DialogProps";
import {ButtonOwnProps} from "@mui/material/Button/Button";

interface DialogButtonProps<DialogProps> extends ButtonOwnProps {
    buttonLabel: string;
    dialog: React.FunctionComponent<DialogProps>;
    dialogProps: DialogProps;
    disabled?: boolean;
}

export const DialogButton = <PropsType extends DialogProps, >(props: DialogButtonProps<PropsType>) => {
    const {buttonLabel, dialog, dialogProps, disabled = false} = {...props}
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const generalDialogProps: GeneralDialogProps = {
        open: dialogOpen,
        onClose: handleDialogClose
    }

    return <>
        <Button disabled={disabled} color={'secondary'} onClick={handleDialogOpen} size={'medium'} variant={'contained'} {...props}>{buttonLabel}</Button>
        {React.createElement(dialog, {...generalDialogProps, ...dialogProps})}
    </>
}