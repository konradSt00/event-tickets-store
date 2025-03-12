import React from "react";
import {CategoryFields} from "./CategoryFields";
import {FormDialog} from "../common/FormDialog";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";
import {CategoryService} from "../../../services/CategoryService";
import {DialogService} from "../../../services/DialogService";

export const AddCategoryDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {
                action: (data) => {
                    CategoryService.addCategory(data)
                        .then((response) => {
                            if (response.data?.id) {
                                DialogService.showAlertDialog({type: "success", message: 'New category created!'})
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

    return <FormDialog actionButtons={getActionButtons()} FormComponent={CategoryFields} {...props}/>
}