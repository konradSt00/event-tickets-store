import {FieldValues, Validate, ValidateResult} from "react-hook-form";
import {FormFields} from "../model/form/register/RegisterFormFields";

export const validateRepeatPassword: Validate<string, FieldValues> = (repeatPassword: string, formValues: FieldValues): ValidateResult => {
    const password = formValues[FormFields.PASSWORD];
    if (password === repeatPassword) return undefined;
    return 'Repeat password is different than password'
}