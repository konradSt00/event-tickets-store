import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Controller, useFormContext} from "react-hook-form";
import React from "react";
import {FormFields} from "../../../model/form/event/EventFormFields";
import {useTheme} from "@mui/material/styles";
import {DATE_FORMAT} from "../../../constants";
import dayjs from "dayjs";
import {TextField} from "@mui/material";

interface EventDateFieldProps {
    fieldName: FormFields
}

export const EventDateField = (props: EventDateFieldProps) => {
    const theme = useTheme();
    const {control} = useFormContext();

    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller rules={{required: true}} control={control} render={(field => {
            return <DatePicker
                format={DATE_FORMAT}
                value={dayjs(field.field.value, [DATE_FORMAT])}
                onChange={(date) => field.field.onChange(date?.format(DATE_FORMAT))}
                slotProps={{
                    textField: {
                        sx: {my: theme.spacing(1), width: "100% "},
                        color: 'secondary',
                        error: !!field.fieldState.error,
                        helperText: !!field.fieldState.error && 'Please provide valid date',
                    },
                }}
            />
        })} name={props.fieldName}/>
    </LocalizationProvider>
}