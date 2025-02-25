import {InputField} from "../common/InputField";
import React from "react";
import {FormFields} from "../../../model/form/register/RegisterFormFields";

export const RegisterFields = () => {
    return <>
        <InputField fieldName={FormFields.EMAIL} maxLength={99}/>
        <InputField fieldName={FormFields.PASSWORD} type={"password"} maxLength={99}/>
        <InputField fieldName={FormFields.REPEAT_PASSWORD} type={"password"} maxLength={99}/>
    </>
}