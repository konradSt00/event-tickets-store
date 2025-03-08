import React from "react";
import {FormDialog} from "../common/FormDialog";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {LoginFields} from "./LoginFields";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";
import {AuthService} from "../../../services/AuthService";
import {LoginRq} from "../../../model/request/LoginRq";
import {FormFields, LoginFormValues} from "../../../model/form/login/LoginFormFields";

interface LoginDialogProps extends DialogProps {
    onSuccessLogin?: () => void
}

export const LoginDialog = (props: LoginDialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {
                label: 'LOGIN',
                action: (data) => {
                    props.onSuccessLogin && props.onSuccessLogin();
                    AuthService.login(buildLoginRq(data));
                }
            },
            secondary: {
                action: () => {
                }
            }
        }
    }

    const buildLoginRq = (data: LoginFormValues): LoginRq => {
        return {
            email: data[FormFields.EMAIL],
            password: data[FormFields.PASSWORD]
        }
    }

    return <FormDialog
        FormComponent={LoginFields}
        actionButtons={getActionButtons()}
        {...props}/>
}