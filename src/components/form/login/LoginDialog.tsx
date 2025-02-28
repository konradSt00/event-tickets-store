import React from "react";
import {FormDialog} from "../common/FormDialog";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {LoginFields} from "./LoginFields";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";

interface LoginDialogProps extends DialogProps {
    onSuccessLogin?: () => void
}

export const LoginDialog = (props: LoginDialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {label: 'LOGIN', action: (data) => {props.onSuccessLogin && props.onSuccessLogin(); return {} as any}},
            secondary: {action: (data) => {return {} as any}}
        }
    }

    return <FormDialog
        FormComponent={LoginFields}
        actionButtons={getActionButtons()}
        {...props}/>
}