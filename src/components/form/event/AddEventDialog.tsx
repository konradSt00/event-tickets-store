import React from "react";
import {FormDialog} from "../common/FormDialog";
import {EventFields} from "./EventFields";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";

export const AddEventDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {action: (data) => {return {} as any}},
            secondary: {action: (data) => {return {} as any}}
        }
    }

    return <FormDialog actionButtons={getActionButtons()} FormComponent={EventFields} {...props}/>
}