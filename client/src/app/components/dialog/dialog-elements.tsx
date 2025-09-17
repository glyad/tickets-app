import styled from "@emotion/styled";

const titleAreaName = "title";
const imageAreaName = "image";
const messageAreaName = "message";
const additionalRowName = "additional";
const buttonsAreaName = "buttons";

export const DialogRootGrid = styled.div([
  {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr auto",
    gap: 12,
    paddingBottom: 8,
    gridTemplateAreas:
      `"${titleAreaName} ${titleAreaName}"
       "${imageAreaName} ${messageAreaName}"
       ". ${additionalRowName}"
       "${buttonsAreaName} ${buttonsAreaName}"`,
  }
]);

export const DialogTitleDiv = styled.div([
  {
    gridArea: titleAreaName,

    padding: 12,
    color: "white",
    backgroundColor: "black",
  }
]);

export const DialogImageDiv = styled.div([
  {
    gridArea: imageAreaName,

    padding: 12,
  }
]);

export const DialogMessageDiv = styled.div([
  {
    gridArea: messageAreaName,

    padding: 12,
  }
]);

export const AdditionalRowDiv = styled.div([
  {
    gridArea: additionalRowName,

    padding: 12,
  }
]);

export const DialogButtonsDiv = styled.div([
  {
    gridArea: buttonsAreaName,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 12,

    padding: 12,

    button: [
      {
        width: 80,
        height: 24,
      }
    ]
  },
]);