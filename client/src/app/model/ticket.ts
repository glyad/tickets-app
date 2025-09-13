import { Assignee } from "./assignee";
import { Priority } from "./priorities";
export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'closed';
  priority: Priority;
  createdAt: string;
  updatedAt: string; 
  assignedTo?: Assignee;
  submittedBy: string;
  notes: string;
}
