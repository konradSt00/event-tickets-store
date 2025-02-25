import {InputField} from "../common/InputField";
import React from "react";
import {FormFields} from "../../../model/form/login/LoginFormFields";

export const LoginFields = () => {
    return <>
        <InputField fieldName={FormFields.EMAIL} maxLength={99}/>
        <InputField fieldName={FormFields.PASSWORD} type={"password"} maxLength={99}/>
    </>
}