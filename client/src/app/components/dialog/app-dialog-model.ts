export const enum AppDialogKind {
    InputString = "InputString",
    Message = "Message",
    Question = "Question",
}

export const enum MessageKind {
    Information = "Information",
    Warning = "Warning",
    Error = "Error",
}

export type AppDialogPayload = {
    readonly kind: AppDialogKind.InputString;
    readonly title: string;
    readonly message: string;
    readonly isPassword: boolean;
} | {
    readonly kind: AppDialogKind.Message;
    readonly messageKind: MessageKind;
    readonly title: string;
    readonly message: string;
} | {
    readonly kind: AppDialogKind.Question;
    readonly title: string;
    readonly message: string;
    readonly showCancelButton: boolean;
}

export type AppDialog = {
    readonly kind: AppDialogKind.InputString;
    readonly title: string;
    readonly message: string;
    readonly isPassword: boolean;
    readonly cancel: () => void;
    readonly ok: (value: string) => void;
} | {
    readonly kind: AppDialogKind.Message;
    readonly messageKind: MessageKind;
    readonly title: string;
    readonly message: string;
    readonly close: () => void;
} | {
    readonly kind: AppDialogKind.Question;
    readonly title: string;
    readonly message: string;
    readonly showCancelButton: false;
    readonly yes: () => void;
    readonly no: () => void;
} | {
    readonly kind: AppDialogKind.Question;
    readonly title: string;
    readonly message: string;
    readonly showCancelButton: true;
    readonly yes: () => void;
    readonly no: () => void;
    readonly cancel: () => void;
}

export const enum AppDialogButton {
    Ok = "Ok",
    Cancel = "Cancel",
    Yes = "Yes",
    No = "No",
    Close = "Close",
}

export type AppDialogResult = {
    readonly button: AppDialogButton.Cancel | AppDialogButton.Close | AppDialogButton.Yes | AppDialogButton.No;
} | {
    readonly button: AppDialogButton.Ok;
    readonly kind: AppDialogKind.InputString;
    readonly value: string;
}
