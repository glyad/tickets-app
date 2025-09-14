import React from 'react';
import { Ticket } from './model';

interface ActionButtonRendererProps {
  data: Ticket;
}

export const ActionButtonRenderer = (props: ActionButtonRendererProps) => {

  const handleEdit = () => {
    alert(`Edit button clicked for ticket: ${props?.data?.title}`);
  };

  const handleDelete = () => {
    alert(`Delete button clicked for ticket: ${props?.data?.title}`);
  };
  
  return (
    <>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
