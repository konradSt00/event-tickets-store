import React, {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {RegisterFormValues} from "../../../model/form/register/RegisterFormFields";
import {RegisterFields} from "../register/RegisterFields";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {OrderAlert} from "./OrderAlert";
import {Actions} from "../../../actions/actions";
import {UserDataService} from "../../../services/UserDataService";

interface FinalizationFormProps {
    onSubmitAction?: () => void;
}

export const FinalizationForm = (props: FinalizationFormProps) => {
    const userData = useSelector((state: StoreState) => state.profileState.userData)
    const methods = useForm<RegisterFormValues>({defaultValues: {...userData}})
    const dispatch = useDispatch();

    useEffect(() => {
        UserDataService.getUserData();
    }, []);

    const handleSubmit = () => {
        dispatch({type: Actions.SET_ORDER_STATUS, payload: 'Message'});
        props.onSubmitAction && props.onSubmitAction();
    }

    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <RegisterFields withPassword={false}/>
            <Button variant={'contained'} type={'submit'}>Order</Button>
            <OrderAlert/>
        </form>
    </FormProvider>
}