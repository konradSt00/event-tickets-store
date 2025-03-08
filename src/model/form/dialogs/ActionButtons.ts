export interface ActionButtons {
    primary: ActionButton,
    secondary: ActionButton
}

export interface ActionButton {
    label?: string,
    action?: (data: any) => void;
}