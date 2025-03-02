import {Validate, ValidateResult} from "react-hook-form";

const EMAIL_REGULAR_EXPRESSION = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

export const validateEmail: Validate<string, any> = (value: string): ValidateResult => {
    const regExp = new RegExp(EMAIL_REGULAR_EXPRESSION)
    if (regExp.test(value)) return undefined;
    return 'Please provide correct email'
}