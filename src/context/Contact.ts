import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface ContactState extends PageBase {
    title?: string;
    subtitle?: string;
    contactInfo?: ContactInfo;
    googleMapUrl?: string;
}

// types.ts
export interface ContactInfo {
    address?: string;
    phone?: string;
    email?: string;
}

