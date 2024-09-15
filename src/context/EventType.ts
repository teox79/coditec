import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface EventState extends PageBase {
    title?: string;
    subtitle?: string;
    events?: Event[]
}

export interface Event {
    id: number;
    title?: string;
    date?: string;
    location?: string;
    description?: string;
    imageUrl?: string;
    startDate?: string;
}
