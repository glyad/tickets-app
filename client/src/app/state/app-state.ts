import { create } from "zustand";
import {
  Assignee,
  Ticket,
  Priority,
  Status
} from "../model";

interface AppState {
    readonly tickets: Ticket[];
    readonly statuses: Status[];
    readonly priorities: Priority[];
    readonly assignees: Assignee[];
    readonly isDataLoading: boolean;

    startLoadingData: () => void;
    stopDataLoading: () => void;

    updateTicket: (updatedTicket: Ticket) => void;
}

export const useAppStore = create<AppState>()((set, get) => ({
    isDataLoading: false,

    startLoadingData: (): void => set(() => ({ isDataLoading: true })),
    stopDataLoading: (): void => set(() => ({ isDataLoading: false })),

    updateTicket: (updatedTicket: Ticket): void => {
        const tickets = get().tickets.find(ticket => ticket.id === updatedTicket.id);
        if (tickets) {
            set(state => ({
                tickets: state.tickets.map(ticket =>
                    ticket.id === updatedTicket.id ? { ...ticket, ...updatedTicket } : ticket
                )
            }));
        }
    },

    statuses: [
        { label: 'Open', value: 0 },
        { label: 'In Progress', value: 1 },
        { label: 'Closed', value: 2 }
    ],

    priorities: [
        { label: 'Low', value: 0 },
        { label: 'Medium', value: 1 },
        { label: 'High', value: 2 },
        { label: 'Critical', value: 3 }
    ],

    assignees: [
        { value: 0, label: 'Unassigned' },
        { value: 1, label: 'Alice' },
        { value: 2, label: 'Bob' },
        { value: 3, label: 'Charlie' }
    ],

    tickets: [
        {
            id: "1",
            title: "Sample Ticket",
            description: "This is a sample ticket.",
            status: { label: 'Open', value: 0 },
            priority: { label: 'High', value: 2 },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            submittedBy: "user1",
            notes: "No additional notes.",
            assignedTo: { value: 1, label: 'Alice' }
        }, { 
            id: "2",
            title: "Another Ticket",
            description: "This is another sample ticket.",
            status: { label: 'In Progress', value: 1 },
            priority: { label: 'Medium', value: 1 },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            submittedBy: "user2",
            notes: "Urgent issue.",
            assignedTo: { value: 0, label: 'Unassigned' }
        }, {
            id: "3",
            title: "Third Ticket",
            description: "This is the third sample ticket.",
            status: { label: 'Closed', value: 2 },
            priority: { label: 'Low', value: 0 },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            submittedBy: "user3",
            notes: "Resolved.",
            assignedTo: { value: 2, label: 'Bob' }
        }
    ]
}));
