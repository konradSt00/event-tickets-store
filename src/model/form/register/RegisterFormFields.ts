
export enum FormFields {
    EMAIL = 'email',
    PASSWORD = 'password',
    REPEAT_PASSWORD = 'repeatPassword',
}

export interface RegisterFormValues {
    [FormFields.EMAIL]: string;
    [FormFields.PASSWORD]: string;
    [FormFields.REPEAT_PASSWORD]: string;
}