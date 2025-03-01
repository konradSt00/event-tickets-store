
export enum FormFields {
    EMAIL = 'email',
    PASSWORD = 'password',
    REPEAT_PASSWORD = 'repeatPassword',
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
}

export interface RegisterFormValues {
    [FormFields.EMAIL]: string;
    [FormFields.PASSWORD]: string;
    [FormFields.REPEAT_PASSWORD]: string;
    [FormFields.FIRST_NAME]: string;
    [FormFields.LAST_NAME]: string;
}