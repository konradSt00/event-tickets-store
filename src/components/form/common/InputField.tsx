import {TextField} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material/styles";
import {FieldValues, Path, useFormContext, Validate} from "react-hook-form";

interface InputFieldProps<FormFields> {
    fieldName: Path<FormFields>;
    maxLength?: number;
    type?: React.HTMLInputTypeAttribute;
    multiline?: boolean;
    required?: boolean;
    validate?: Validate<string, FieldValues>
    fieldLabel?: string;
}

export const InputField = <FormFields, >(props: InputFieldProps<FormFields>) => {
    const theme = useTheme();
    const {
        formState: {errors},
        fieldName,
        maxLength = 99999,
        register,
        multiline = false,
        required = true,
        type = "text",
        fieldLabel
    } = {...useFormContext(), ...props}
    const error = errors[fieldName]
    return <TextField
        label={`Please provide ${fieldLabel || fieldName}`}
        helperText={error?.message ? `${error?.message}` : !!error && `${fieldLabel || fieldName} is required`}
        sx={{my: theme.spacing(1)}}
        color={'secondary'}
        multiline={multiline}
        error={!!error}
        fullWidth
        type={type}
        {...register(fieldName, {required, maxLength, validate: props.validate})}
    />
}