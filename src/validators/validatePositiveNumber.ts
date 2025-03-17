import {Validate, ValidateResult} from "react-hook-form";


export const validatePositiveNumber: Validate<string, any> = (value: string): ValidateResult => {
    if (+value > 0) return undefined;
    return 'Field must be grater than 0!'
}