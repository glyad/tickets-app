import { Assignee } from "./assignee";
import { Priority } from "./priority";
import { Status } from "./status";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  createdAt: string;
  updatedAt: string; 
  assignedTo?: Assignee;
  submittedBy: string;
  notes: string;
}
