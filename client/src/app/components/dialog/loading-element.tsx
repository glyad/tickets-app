import { ModalDialog } from "./modal-dialog";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoadingElementProps {
  // No props needed for now
}

export const LoadingElement = ({ }: LoadingElementProps) => {
    return (
        <ModalDialog>
            <div>Loading...</div>
        </ModalDialog>
    );
}
