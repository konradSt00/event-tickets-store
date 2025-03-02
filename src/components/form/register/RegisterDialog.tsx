import React from "react";
import {FormDialog} from "../common/FormDialog";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {RegisterFields} from "./RegisterFields";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";

export const RegisterDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {label: 'REGISTER', action: (data) => {return {} as any}},
            secondary: {action: (data) => {return {} as any}}
        }
    }

    return <FormDialog
        FormComponent={RegisterFields}
        actionButtons={getActionButtons()}
        {...props}/>
}