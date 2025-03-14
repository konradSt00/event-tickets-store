import {Button} from "@mui/material";
import React from "react";
import {DialogProps, GeneralDialogProps} from "../model/form/dialogs/DialogProps";
import {ButtonOwnProps} from "@mui/material/Button/Button";

interface DialogButtonProps<DialogProps> extends ButtonOwnProps {
    buttonLabel: string;
    dialog: React.FunctionComponent<DialogProps>;
    dialogProps: DialogProps;
    disabled?: boolean;
    className?: string
}

export const DialogButton = <PropsType extends DialogProps, >(props: DialogButtonProps<PropsType>) => {
    const {buttonLabel, dialog, dialogProps, disabled = false, ...buttonProps} = {...props}
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
        <Button
            className={props.className}
            disabled={disabled}
            color={'primary'}
            onClick={handleDialogOpen}
            size={'large'}
            variant={'text'}
            {...buttonProps}
        >
            {buttonLabel}
        </Button>
        {React.createElement(dialog, {...generalDialogProps, ...dialogProps})}
    </>
}