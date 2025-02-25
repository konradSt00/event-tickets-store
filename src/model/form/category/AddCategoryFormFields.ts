export enum FormFields {
    categoryId = 'id',
    categoryName = 'name',
    categoryColor = 'color'
}

export interface CategoryFormValues {
    [FormFields.categoryId]?: string;
    [FormFields.categoryName]: string;
    [FormFields.categoryColor]: string;
}