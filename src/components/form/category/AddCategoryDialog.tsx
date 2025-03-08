import React from "react";
import {CategoryFields} from "./CategoryFields";
import {FormDialog} from "../common/FormDialog";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";
import {CategoryService} from "../../../services/CategoryService";

export const AddCategoryDialog = (props: DialogProps) => {
    const getActionButtons = (): ActionButtons => {
        return {
            primary: {
                action: (data) => {
                    CategoryService.addCategory(data)
                }
            },
            secondary: {action: (data) => {return {} as any}}
        }
    }

    return <FormDialog actionButtons={getActionButtons()} FormComponent={CategoryFields} {...props}/>
}