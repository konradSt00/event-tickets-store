
export enum FormFields {
    EMAIL = 'email',
    PASSWORD = 'password',
    REPEAT_PASSWORD = 'repeatPassword',
    FIRST_NAME = 'firstname',
    LAST_NAME = 'lastname',
}

export interface RegisterFormValues {
    [FormFields.EMAIL]: string;
    [FormFields.PASSWORD]: string;
    [FormFields.REPEAT_PASSWORD]: string;
    [FormFields.FIRST_NAME]: string;
    [FormFields.LAST_NAME]: string;
}