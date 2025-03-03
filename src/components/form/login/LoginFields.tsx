import {InputField} from "../common/InputField";
import React from "react";
import {FormFields} from "../../../model/form/login/LoginFormFields";
import {validateEmail} from "../../../validators/validateEmail";

export const LoginFields = () => {
    return <>
        <InputField fieldName={FormFields.EMAIL} maxLength={99} validate={validateEmail}/>
        <InputField fieldName={FormFields.PASSWORD} type={"password"} maxLength={99}/>
    </>
}