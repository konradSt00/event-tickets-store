import {InputField} from "../common/InputField";
import {FormFields} from "../../../model/form/category/AddCategoryFormFields";
import React from "react";

export const CategoryFields = () => {
    return <>
        <InputField fieldName={FormFields.categoryName} maxLength={30}/>
    </>
}