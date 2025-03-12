import {InputField} from "../common/InputField";
import React from "react";
import {FormFields} from "../../../model/form/register/RegisterFormFields";
import {validateRepeatPassword} from "../../../validators/validatePassword";
import {validateEmail} from "../../../validators/validateEmail";

interface RegisterFieldsProps {
    withPassword?: boolean;
}

export const RegisterFields = (props: RegisterFieldsProps) => {
    const {withPassword = true} = {...props}

    const showPasswordFields = () => {
        return <>
            <InputField fieldName={FormFields.PASSWORD} type={"password"} maxLength={99}/>
            <InputField fieldName={FormFields.REPEAT_PASSWORD} fieldLabel={'repeat password'} type={"password"}
                        maxLength={99}
                        validate={validateRepeatPassword}/>
        </>
    }

    return <>
        <InputField fieldName={FormFields.EMAIL} maxLength={99} validate={validateEmail}/>
        {withPassword && showPasswordFields()}
        <InputField fieldName={FormFields.FIRST_NAME} fieldLabel={'first name'} maxLength={99}/>
        <InputField fieldName={FormFields.LAST_NAME} fieldLabel={'last name'} maxLength={99}/>
    </>
}