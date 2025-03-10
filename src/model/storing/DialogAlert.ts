export type DialogType = 'warning' | 'error' | 'info' | 'success'

export interface DialogAlert {
    message: string,
    type: DialogType
}