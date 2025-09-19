import { MessageKind } from "@/app/model";
import { DialogButtonsDiv, DialogImageDiv, DialogMessageDiv, DialogRootGrid, DialogTitleDiv } from "./dialog-elements";
import { ModalDialog } from "./modal-dialog";

interface MessageDialogProps {
  readonly messageKind: MessageKind;
  readonly title: string;
  readonly message: string;
  readonly close: () => void;
}

export const MessageDialog = ({ messageKind, title, message, close }: MessageDialogProps) => {
  return (
    <ModalDialog>
      <DialogRootGrid>
        <DialogTitleDiv>
          {title}
        </DialogTitleDiv>
        <DialogImageDiv>
          {messageKind}
        </DialogImageDiv>
        <DialogMessageDiv>
          {message}
        </DialogMessageDiv>
        <DialogButtonsDiv>
          <button onClick={() => close()}>Close</button>
        </DialogButtonsDiv>
      </DialogRootGrid>
    </ModalDialog>
  );
}
