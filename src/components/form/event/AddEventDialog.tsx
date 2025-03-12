import React from "react";
import {FormDialog} from "../common/FormDialog";
import {EventFields} from "./EventFields";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";
import {EventService} from "../../../services/EventService";
import {DialogService} from "../../../services/DialogService";

export const AddEventDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {
                action: (data) => {
                    EventService.createNewEvent(data)
                        .then((response) => {
                            if (!!response.data.id) {
                                DialogService.showAlertDialog({
                                    type: "success",
                                    message: `Event #${response.data.id} created successfully!`
                                })
                            }
                        })
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