import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {RegisterFormValues} from "../../../model/form/register/RegisterFormFields";
import {RegisterFields} from "../register/RegisterFields";
import {Button} from "@mui/material";

interface FinalizationFormProps {
    defaultValues?: RegisterFormValues;
    onSubmitAction?: () => void;
}

export const FinalizationForm = (props: FinalizationFormProps) => {
    const methods = useForm<RegisterFormValues>({defaultValues: props.defaultValues})

    const handleSubmit = () => {
        props.onSubmitAction && props.onSubmitAction();
    }

    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <RegisterFields withPassword={false}/>
            <Button variant={'contained'} type={'submit'}>Order</Button>
        </form>
    </FormProvider>
}