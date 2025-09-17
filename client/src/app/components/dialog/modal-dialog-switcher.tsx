import { AppDialogButton, AppDialogKind } from ".";
import { JSX } from "react";
import { InputStringDialog } from "./input-string-dialog";
import { MessageDialog } from "./message-dialog";
import { QuestionDialog } from "./question-dialog";
import { useAppStore } from '../../state/app-state';



export const ModalDialogSwitcher = (): JSX.Element | null => {
  const { currentDialog } = useAppStore((state) => state);

  if (currentDialog === null) {
    return null;
  }

  switch (currentDialog.kind) {
    case AppDialogKind.InputString: return <InputStringDialog
      isPassword={currentDialog.isPassword}
      title={currentDialog.title}
      message={currentDialog.message}
      value=""
      ok={currentDialog.ok}
      cancel={currentDialog.cancel}
    />

    case AppDialogKind.Message: return <MessageDialog
      messageKind={currentDialog.messageKind}
      title={currentDialog.title}
      message={currentDialog.message}
      close={currentDialog.close}
    />

    case AppDialogKind.Question: return <QuestionDialog
      showCancelButton={currentDialog.showCancelButton}
      title={currentDialog.title}
      message={currentDialog.message}
      close={(result: AppDialogButton) => {
        switch (result) {
          case AppDialogButton.Yes:
            currentDialog.yes();
            return;
          case AppDialogButton.No:
            currentDialog.no();
            break;
          case AppDialogButton.Cancel:
            if (currentDialog.showCancelButton) {
              currentDialog.cancel();
            }
            break;
        }
      }}
    />
  }
}
