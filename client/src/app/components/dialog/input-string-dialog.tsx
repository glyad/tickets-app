import { useState } from "react";
import { AdditionalRowDiv, DialogButtonsDiv, DialogImageDiv, DialogMessageDiv, DialogRootGrid, DialogTitleDiv } from "./dialog-elements";
import { ModalDialog } from "./modal-dialog";
import * as R from "ramda";

interface InputStringDialogProps {
  readonly isPassword: boolean;
  readonly title: string;
  readonly message: string;
  readonly value: string;
  readonly ok: (value: string) => void;
  readonly cancel: () => void;
}

export const InputStringDialog = ({ isPassword, title, message, value, ok, cancel }: InputStringDialogProps) => {
  const [valueStr, setValueStr] = useState(value);

  return (
    <ModalDialog>
      <DialogRootGrid>
        <DialogTitleDiv>
          {title}
        </DialogTitleDiv>
        <DialogImageDiv>
          TXT
        </DialogImageDiv>
        <DialogMessageDiv>
          {message}
        </DialogMessageDiv>
        <AdditionalRowDiv>
          <input type={isPassword ? "password" : "text"} value={valueStr} onChange={(event) => setValueStr(event.target.value)}></input>
        </AdditionalRowDiv>
        <DialogButtonsDiv>
          <button disabled={R.isEmpty(valueStr)} onClick={() => ok(valueStr)}>Ok</button>
          <button onClick={cancel}>Cancel</button>
        </DialogButtonsDiv>
      </DialogRootGrid>
    </ModalDialog>
  );
}
