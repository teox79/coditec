import { PageBase, SocialLinks } from "./Type";

// Stato specifico per ogni pagina
export interface TrainerState extends PageBase {
    title?: string;
    subtitle?: string;
    trainers: Trainer[];
}


export interface Trainer {
    id: number;
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    socialLinks?: SocialLinks;
}