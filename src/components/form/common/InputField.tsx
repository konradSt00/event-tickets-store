import {TextField} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material/styles";
import {Path, useFormContext} from "react-hook-form";

interface InputFieldProps<FormFields> {
    fieldName: Path<FormFields>;
    maxLength?: number;
    type?: React.HTMLInputTypeAttribute;
    multiline?: boolean;
    required?: boolean;
}

export const InputField = <FormFields, >(props: InputFieldProps<FormFields>) => {
    const theme = useTheme();
    const {formState: {errors}, fieldName, maxLength = 99999, register, multiline = false, required = true, type = "text"} = {...useFormContext(), ...props}
    const hasError = !!errors[fieldName]
    return <TextField
        label={`Please provide ${fieldName}`}
        helperText={hasError && `Event ${fieldName} is required`}
        sx={{my: theme.spacing(1)}}
        color={'secondary'}
        multiline={multiline}
        error={hasError}
        fullWidth
        type={type}
        {...register(fieldName, {required, maxLength})}
    />
}