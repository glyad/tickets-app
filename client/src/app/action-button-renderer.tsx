import React from 'react';
import { Ticket } from './model';
import { useAppStore } from './state/app-state';
import { AppDialogButton, AppDialogKind, ModalDialogSwitcher } from './components/dialog';

interface ActionButtonRendererProps {
  data: Ticket;
}

export const ActionButtonRenderer = (props: ActionButtonRendererProps) => {

  const { updateTicket, deleteTicket, showDialog } = useAppStore();

  const handleEdit = () => {
    alert(`Edit button clicked for ticket: ${props?.data?.title}`);
  };

  const handleDelete = async () => {
    
        const result = await showDialog({
          kind: AppDialogKind.Question,
          title: "Delete Ticket",
          message: "Are you sure you want to delete this ticket?",
          showCancelButton: false,
        });
        console.log("Dialog result:", result);
        switch (result.button) {
          case AppDialogButton.Yes:
            console.log("User answered Yes");
            break;
          case AppDialogButton.No:
            console.log("User answered No");
            break;
          case AppDialogButton.Cancel:
            console.log("User cancelled the dialog");
            break;
        }
      
    
    deleteTicket(props?.data?.id);
  };
  
  return (
    <>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <ModalDialogSwitcher />
    </>
  );
};
