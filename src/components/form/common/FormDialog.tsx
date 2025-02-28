import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {DefaultValues, FieldValues, FormProvider, useForm} from "react-hook-form";
import React from "react";
import store from "../../../store/store";
import {StoreActionType} from "../../../store/reducer";
import {DialogProps} from "../../../model/form/dialogs/DialogProps";
import {ActionButtons} from "../../../model/form/dialogs/ActionButtons";

export interface GeneralDialogProps<FormValuesType extends FieldValues> extends DialogProps {
    open?: boolean;
    onClose?: () => void
    FormComponent: React.FunctionComponent
    defaultValues?: DefaultValues<FormValuesType>
    actionButtons: ActionButtons;
}

export const  FormDialog = <FormValuesType extends FieldValues, >(props: GeneralDialogProps<FormValuesType>) => {
    const methods = useForm<FormValuesType>({defaultValues: props.defaultValues})

    const onSubmit = (data: FormValuesType) => {
        // store.dispatch(props.dispatchMethod(data))
        const primaryAction = props.actionButtons.primary.action;
        primaryAction && primaryAction(data)
        handleDialogClose();
    }

    const handleDialogClose = () => {
        methods.reset();
        props.onClose && props.onClose();
    }

    return <Dialog color={'primary'} fullWidth={true} maxWidth={'sm'} open={!!props.open} onClose={handleDialogClose}>
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <DialogContent dividers={true}>
                    {React.createElement(props.FormComponent)}
                </DialogContent>
                <DialogActions>
                    <Button variant={'outlined'} color={'secondary'} onClick={handleDialogClose}>{props.actionButtons?.secondary?.label || 'Close'}</Button>
                    <Button variant={'contained'} color={'secondary'} type={'submit'}>{props.actionButtons.primary.label || 'Save'}</Button>
                </DialogActions>
            </form>
        </FormProvider>
    </Dialog>
}