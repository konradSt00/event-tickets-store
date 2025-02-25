
export enum FormFields {
    EMAIL = 'email',
    PASSWORD = 'password',
}

export interface LoginFormValues {
    [FormFields.EMAIL]: string;
    [FormFields.PASSWORD]: string;
}