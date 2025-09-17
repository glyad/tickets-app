import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardProps {
}

const Card = styled.div<CardProps>([
    {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100%",
        margin: 12,
        // padding: "20px 28px 20px 28px",
        border: "none",
        background: "#fff",
        color: "#333",
        // flexWrap: "wrap",
        // textAlign: "center",
        textAlign: "left",
        wordWrap: "break-word",

        maxWidth: 512,
    }
]);

const muiBackdropRootStyle: CSSProperties = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    zIndex: 1000,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
}

const transition: CSSProperties = {
    opacity: 1,
    transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
}

const RootDiv = styled.div([
    {
        ...muiBackdropRootStyle,
        ...transition,
    }
]);

interface ModalDialogProps {
    readonly children: ReactNode;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({ children }) => (
    <RootDiv data-cy="modal-dialog" aria-hidden="true">
        <Card>
            {children}
        </Card>
    </RootDiv>
);
