import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface EventState extends PageBase {
    title?: string;
    subtitle?: string;
    events?: Event[]
}

export interface Event {
    id: string;
    title?: string;
    eventDate?: string;
    location?: string;
    description?: string;
    imageUrl?: string;
    startDate?: string;
    registration?: Registration;
    isFreeEvent?: boolean;
    eventType?: EventType;
}

export interface Registration {
    maxParticipants?: number;
    participants?: number;
    url?: string;
    isOpen?: boolean;
}

export enum EventType {
    CODERDOJO = "coderdojo",
    CODITEC = "coditec",
}