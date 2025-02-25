import {Chip, MenuItem, TextField} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material/styles";
import {connect} from 'react-redux';
import {StoreState} from "../../../model/storing/StoreState";
import {Controller, FieldValues, Path, useFormContext} from "react-hook-form";
import {Category} from "../../../model/Category";

interface CategorySelectFieldOwnProps<FormValuesType extends FieldValues>{
    fieldName: Path<FormValuesType>
    required?: boolean
}

interface CategorySelectFieldStoreProps {
    categories: Category[]
}

type CategorySelectFieldProps<FormValuesType extends FieldValues> = CategorySelectFieldOwnProps<FormValuesType> & CategorySelectFieldStoreProps

const CategorySelectComponent = <FormValuesType extends FieldValues, >(props: CategorySelectFieldProps<FormValuesType>) => {
    const {control, fieldName, categories, required = true} = {...useFormContext(), ...props};
    const theme = useTheme();

    return <Controller name={fieldName} rules={{required: required}} control={control} render={(field) => {
        return <TextField
            value={field.field.value}
            select fullWidth
            color={'secondary'}
            sx={{my: theme.spacing(1)}}
            label={'Please select category'}
            helperText={!!field.fieldState.error && `Event category is required`}
            error={!!field.fieldState.error}
            onChange={field.field.onChange}
        >
            {categories.map(category => {
                return <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
            })}
        </TextField>
    }}/>



}

const mapState = (storeState: StoreState, ownProps: CategorySelectFieldOwnProps<any>): CategorySelectFieldProps<any> => {
    return {
        categories: storeState.categories,
        ...ownProps
    }
}

const CategorySelectField = connect(mapState)(CategorySelectComponent)

export default CategorySelectField;