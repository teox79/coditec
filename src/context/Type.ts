import { AboutState } from "./AboutTypes";
import { ContactState } from "./Contact";
import { CourseState } from "./CourseTypes";
import { EventState } from "./EventType";
import { GalleryState } from "./GalleryTypes";
import { HomeState } from "./HomeType";
import { TrainerState } from "./TrainerType";
import { ManageUiState } from "./UiTypes";


export interface SocialLinks {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
}

// Interfaccia base per le proprietà comuni a tutte le pagine
export interface PageBase {
    title?: string;
    description?: string;
    link?: LinkType;
}

export interface LinkType {
    url: string;
    target?: string;
    label: string;
}
interface ContactInfo {
    address: string;
    city: string;
    phone: string;
    email: string;
}

interface Newsletter {
    heading: string;
    description: string;
}

export interface FooterData {
    sitename: string;
    contactInfo: ContactInfo;
    socialLinks: SocialLinks;
    usefulLinks: LinkType[];
    services: LinkType[];
    newsletter: Newsletter;
    copyright: string;
    credits: string;
    creditsUrl: string;
}


// Stato globale dell'applicazione
export interface AppState {
    home: HomeState;
    footer: FooterData;
    about: AboutState;
    course: CourseState;
    trainer: TrainerState;
    event: EventState;
    gallery: GalleryState;
    contact: ContactState;
    ui: ManageUiState;
}

// Tipo del contesto dell'applicazione
export interface AppContextType {
    state: AppState;
    //updateState: (newState: Partial<AppState>) => void;
}
