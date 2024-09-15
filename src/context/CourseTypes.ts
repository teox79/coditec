import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface CourseState extends PageBase {
    title?: string;
    subtitle?: string;
    courses?: Course[];
}

export type FiltersType = {
    categories: string[];
    years: number[];
    prices: string[];
};

export interface Detail {
    pageTitle: string;
    pageSubtitle: string;
    title: string;
    subtitle: string;
    mentor: string;
    price: string;
    availableSeats: number;
    days: Day[];
    timeStart: string;
    timeEnd: string,
    imgSrc: string,
}

interface Day {
    day: string;
    dayTitle: string;
    dayDescription: string;
    tabTitle: string;
    imgSrc: string;
}

export interface Course {
    id: string;
    imgSrc: string;
    category: Category;
    price: string;
    title: string;
    description: string;
    trainerName: string;
    trainerImg: string;
    usersCount: number;
    heartsCount: number;
    delay: number;
    startDate?: string;
    detail?: Detail;
}

export enum Category {
    Programmazione = "Programmazione",
    Microbit = "Microbit",
    LegoWedo2 = "Lego wedo2",
    Stampa3D = "Stampa 3D",
    DaDefinire = "Da Definire"
  }