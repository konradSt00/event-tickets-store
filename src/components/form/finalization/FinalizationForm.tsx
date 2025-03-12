import React, {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {FormFields, RegisterFormValues} from "../../../model/form/register/RegisterFormFields";
import {RegisterFields} from "../register/RegisterFields";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {Actions} from "../../../actions/actions";
import {UserDataService} from "../../../services/UserDataService";

interface FinalizationFormProps {
    onSubmitAction?: () => void;
}

export const FinalizationForm = (props: FinalizationFormProps) => {
    const userData = useSelector((state: StoreState) => state.profileState.userData)
    const role = useSelector((state: StoreState) => state.role)
    const methods = useForm<RegisterFormValues>({defaultValues: {...userData}})
    const dispatch = useDispatch();

    useEffect(() => {
        UserDataService.getUserData();
    }, [role]);

    useEffect(() => {
        if (!!userData) {
            methods.setValue(FormFields.EMAIL, userData.email)
            methods.setValue(FormFields.FIRST_NAME, userData.firstname)
            methods.setValue(FormFields.LAST_NAME, userData.lastname)
        }
    }, [userData]);

    const handleSubmit = () => {
        dispatch({type: Actions.SET_ORDER_STATUS, payload: 'Message'});
        props.onSubmitAction && props.onSubmitAction();
    }

    return <FormProvider {...methods}>
        <form key={Object(userData).id} onSubmit={methods.handleSubmit(handleSubmit)}>
            <RegisterFields withPassword={false}/>
            <Button variant={'contained'} type={'submit'}>Order</Button>
        </form>
    </FormProvider>
}