import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface GalleryState extends PageBase {
    title?: string;
    subtitle?: string;
    images?: Image[];
}

// Tipi delle immagini
export interface Image {
    id: number;
    src: string;
    alt: string;
}

