import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Controller, FieldValues, useFormContext, Validate} from "react-hook-form";
import React from "react";
import {FormFields} from "../../../model/form/event/EventFormFields";
import {useTheme} from "@mui/material/styles";
import {DATE_FORMAT} from "../../../constants";
import dayjs from "dayjs";
import {isDayjs} from "../../../util/dayjsUtils";

interface EventDateFieldProps {
    fieldName: FormFields
    validate?: Validate<string, FieldValues>
    minDate?: dayjs.Dayjs | FormFields
}

export const EventDateField = (props: EventDateFieldProps) => {
    const theme = useTheme();
    const {control, watch} = useFormContext();

    const getMinDate = (): dayjs.Dayjs => {
        if (!props.minDate) return dayjs();
        if (isDayjs(props.minDate)) return props.minDate;
        const minDateField = watch(props.minDate);
        return !!minDateField ? dayjs(minDateField, DATE_FORMAT) : dayjs();
    }

    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller rules={{required: true, validate: props.validate}} control={control} render={(field => {
            const fieldError = field.fieldState.error;
            return <DatePicker
                minDate={getMinDate()}
                format={DATE_FORMAT}
                value={dayjs(field.field.value, [DATE_FORMAT])}
                onChange={(date) => field.field.onChange(date?.format(DATE_FORMAT))}
                slotProps={{
                    textField: {
                        sx: {my: theme.spacing(1), width: "100% "},
                        color: 'secondary',
                        error: !!field.fieldState.error,
                        helperText: fieldError?.message ? fieldError.message : !!fieldError && 'Please provide valid date',
                    },
                }}
            />
        })} name={props.fieldName}/>
    </LocalizationProvider>
}