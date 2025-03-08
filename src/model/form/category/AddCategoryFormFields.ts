export enum FormFields {
    categoryId = 'id',
    categoryName = 'name',
}

export interface CategoryFormValues {
    [FormFields.categoryId]?: string;
    [FormFields.categoryName]: string;
}