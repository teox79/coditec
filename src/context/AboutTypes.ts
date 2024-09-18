import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface AboutState extends PageBase {
    id: string;
    title?: string;
    subtitle?: string;
    testimonial?: {
        title: string;
        subtitle: string;
        testimonials: Testimonial[];
    }
}

export interface Testimonial {
    imgSrc: string;
    name: string;
    title: string;
    stars: number;
    quote: string;
}