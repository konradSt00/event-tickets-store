import React from "react";
import {FormDialog} from "../common/FormDialog";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {RegisterFields} from "./RegisterFields";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";
import {AuthService} from "../../../services/AuthService";
import {RegisterRq} from "../../../model/request/RegisterRq";
import {FormFields, RegisterFormValues} from "../../../model/form/register/RegisterFormFields";

export const RegisterDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {
                label: 'REGISTER',
                action: (data) => {
                    AuthService.register(buildRegisterRq(data))
                }
            },
            secondary: {action: (data) => {return {} as any}}
        }
    }

    const buildRegisterRq = (data: RegisterFormValues): RegisterRq => {
        return {
            password: data[FormFields.PASSWORD],
            email: data[FormFields.EMAIL],
            firstname: data[FormFields.FIRST_NAME],
            lastname: data[FormFields.LAST_NAME]
        }
    }

    return <FormDialog
        FormComponent={RegisterFields}
        actionButtons={getActionButtons()}
        {...props}/>
}