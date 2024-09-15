import { Course } from "./CourseTypes";
import { PageBase } from "./Type";

// Stato specifico per ogni pagina
export interface HomeState extends PageBase {
    organization?: AboutProps;
    statistics?: Statistic[];
    whyUs?: AboutProps;
    features?: Feature[];
    course?: {
        title?: string;
        subtitle?: string;
        courses?: Course[];
    }
}

export interface AboutProps {
    title: string;
    subtitle?: string;
    description: string;
    points: Point[];
}

export interface Statistic {
    description: string;
    value: number;
}

// Definire il tipo per un punto della sezione
interface Point {
    title?: string;
    description?: string;
    icon?: string;
}

export interface Feature {
    icon: string;
    title: string;
    url: string;
}





