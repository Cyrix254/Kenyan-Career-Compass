export interface Admin {
    id: number;
    name: string;
    role: string;
    whatsappNumber: string; // Format: 2547XXXXXXXX
    available: boolean;
}

export const admins: Admin[] = [
    {
        id: 1,
        name: "Cyrix Ray",
        role: "Academic Support Coordinator",
        whatsappNumber: "254114998416",
        available: true,
    },
    {
        id: 2,
        name: "Dennis Mwachi",
        role: "Academic Support Coordinator",
        whatsappNumber: "254790954203",
        available: true,
    },
];
