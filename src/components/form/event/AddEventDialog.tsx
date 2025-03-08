import React from "react";
import {FormDialog} from "../common/FormDialog";
import {EventFields} from "./EventFields";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";
import {EventService} from "../../../services/EventService";

export const AddEventDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {
                action: (data) => {
                    EventService.createNewEvent(data)
                }
            },
            secondary: {
                action: () => {
                }
            }
        }
    }

    return <FormDialog actionButtons={getActionButtons()} FormComponent={EventFields} {...props}/>
}