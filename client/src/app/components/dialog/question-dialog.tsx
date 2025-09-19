import { AppDialogButton } from ".";
import { DialogButtonsDiv, DialogImageDiv, DialogMessageDiv, DialogRootGrid, DialogTitleDiv } from "./dialog-elements";
import { ModalDialog } from "./modal-dialog";

type QuestionDialogProps = {
  readonly title: string;
  readonly message: string;
} & ({
  readonly showCancelButton: false;
  readonly close: (result: AppDialogButton.Yes | AppDialogButton.No) => void;
} | {
  readonly showCancelButton: true;
  readonly close: (result: AppDialogButton.Yes | AppDialogButton.No | AppDialogButton.Cancel) => void;
})

export const QuestionDialog = ({ showCancelButton, title, message, close }: QuestionDialogProps) => {
  return (
    <ModalDialog>
      <DialogRootGrid>
        <DialogTitleDiv>
          {title}
        </DialogTitleDiv>
        <DialogImageDiv>
          Question
        </DialogImageDiv>
        <DialogMessageDiv>
          {message}
        </DialogMessageDiv>
        <DialogButtonsDiv>
          <button onClick={() => close(AppDialogButton.Yes)}>Yes</button>
          <button onClick={() => close(AppDialogButton.No)}>No</button>
          {showCancelButton && <button onClick={() => close(AppDialogButton.Cancel)}>Cancel</button>}
        </DialogButtonsDiv>
      </DialogRootGrid>
    </ModalDialog>
  );
}
