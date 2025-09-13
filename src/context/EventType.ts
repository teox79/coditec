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
    cardTitle?: string; // serve per visualizzare il titolo nella sidebar a destra visto che title penso sia un usato per mostrare il titolo nel 
    //calendario e non viene passato al dettaglio quindi ho aggiungo cardTitle
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