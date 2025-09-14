import React from 'react';
import { Ticket } from './model';
import { useAppStore } from './state/app-state';

interface ActionButtonRendererProps {
  data: Ticket;
}

export const ActionButtonRenderer = (props: ActionButtonRendererProps) => {

  const { updateTicket, deleteTicket } = useAppStore();

  const handleEdit = () => {
    alert(`Edit button clicked for ticket: ${props?.data?.title}`);
  };

  const handleDelete = () => {
    deleteTicket(props?.data?.id);
  };
  
  return (
    <>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
