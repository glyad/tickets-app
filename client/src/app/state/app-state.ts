import { create } from "zustand";
import {
  Assignee,
  Ticket,
  Priority
} from "../model";

interface AppState {
    readonly tickets: Ticket[];
    readonly priorities: Priority[];
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

    priorities: [
        { label: 'Low', value: 0 },
        { label: 'Medium', value: 1 },
        { label: 'High', value: 2 },
        { label: 'Critical', value: 3 }
    ],

    tickets: [
        {
            id: "1",
            title: "Sample Ticket",
            description: "This is a sample ticket.",
            status: "open",
            priority: { label: 'High', value: 2 },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            submittedBy: "user1",
            notes: "No additional notes."
        }, { 
            id: "2",
            title: "Another Ticket",
            description: "This is another sample ticket.",
            status: "in_progress",
            priority: { label: 'Medium', value: 1 },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            submittedBy: "user2",
            notes: "Urgent issue."
        }
    ]
}));
