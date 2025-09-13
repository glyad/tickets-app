export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'closed';
  createdAt: string;
  updatedAt: string; 
  assignedTo?: string;
  submittedBy: string;
  notes: string;
}
