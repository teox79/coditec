import { Course, FiltersType } from "../context/CourseTypes";
import { Event } from "../context/EventType";
import { Image } from "../context/GalleryTypes";
import { v4 as uuidv4 } from 'uuid';
import { Trainer } from "../context/TrainerType";

export const getCoursesByDateOrYear = (
    courses: Course[],
    count: number,
    dateOrYear: Date | number,
    sortOrder: 'asc' | 'desc' = 'asc' // Parametro per ordinamento, default è 'asc'
): Course[] => {
    let filteredCourses: Course[] = [];

    if (typeof dateOrYear === 'number') {
        // Se `dateOrYear` è un numero (un anno), filtra i corsi per quell'anno
        filteredCourses = courses.filter((course) => {
            if (!course.startDate) return false; // Se la data è indefinita, scarta il corso
            const courseDate = new Date(course.startDate);
            return courseDate.getFullYear() === dateOrYear;
        });
    } else if (dateOrYear instanceof Date) {
        // Se `dateOrYear` è una data, filtra i corsi in base alla data fornita
        filteredCourses = courses.filter((course) => {
            if (!course.startDate) return false;
            const courseDate = new Date(course.startDate);
            return courseDate > dateOrYear; // Corsi dopo la data fornita
        });
    }

    // Ordina i corsi per data
    filteredCourses.sort((a, b) => {
        const dateA = new Date(a.startDate!).getTime();
        const dateB = new Date(b.startDate!).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    // Prendi i primi `count` corsi
    return filteredCourses.slice(0, count);
};

export const sortCourses = (
    courses: Course[],
    sortOrder: 'asc' | 'desc' = 'asc' // Parametro per ordinamento, default è 'asc'
): Course[] => {
    // Ordina i corsi per data
    const sortedCourses = [...courses].sort((a, b) => {
        const dateA = new Date(a.startDate || '').getTime();
        const dateB = new Date(b.startDate || '').getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return sortedCourses;
};


export const formatDate = (date?: Date | string): string => {
    if (!date) return "Da Definire"; // Se la data è assente o indefinita

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "Da Definire"; // Se la data non è valida

    return parsedDate.toLocaleDateString("it-IT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

export const getFilters = (courses: Course[]): FiltersType => {
    // Raccogli le categorie uniche
    const categories = Array.from(new Set(courses.map(course => course.category))).sort();

    // Raccogli i prezzi unici
    const prices = Array.from(new Set(courses.map(course => course.price))).sort();

    // Raccogli gli anni unici a partire da startDate
    const years = Array.from(
        new Set(
            courses
                .map(course => {
                    if (!course.startDate) return null; // Se la data non esiste, ritorna null
                    const courseDate = new Date(course.startDate);
                    return isNaN(courseDate.getTime()) ? null : courseDate.getFullYear(); // Se la data non è valida, ritorna null
                })
                .filter((year): year is number => year !== null) // Filtra i valori nulli
        )
    ).sort((a, b) => a - b); // Ordina gli anni in ordine crescente

    return { categories, years, prices };
};


export const getFutureEvents = (events: Event[]) => {
    const today = new Date().toISOString().split('T')[0];

    // Filtra eventi futuri e con data vuota (null)
    return events
        .filter(event => event.startDate === null || !event.startDate || event.startDate >= today)
        .sort((a, b) => {
            // Ordina per data, mettendo in fondo quelli con la data vuota
            if (a.startDate === null) return 1;
            if (b.startDate === null) return -1;
            return a.startDate!.localeCompare(b.startDate!); // Usa '!' per dire che non è 'null'
        });
};

export const getCourseById = (courses: Course[], id: string): Course | undefined => {
    return courses.find((course) => course.id === id);
};



export const formatDays = (days: { day: string }[]) => {
    const parsedDays = days.map(({ day }) => {
        const date = new Date(day);
        return {
            day: date.getDate(),
            month: date.getMonth() + 1, // Mese (1-based)
        };
    });

    // Raggruppa giorni per mese
    const groupedByMonth = parsedDays.reduce((acc, { day, month }) => {
        const monthName = new Date(2024, month - 1).toLocaleString('it-IT', { month: 'long' });
        if (!acc[monthName]) {
            acc[monthName] = [];
        }
        acc[monthName].push(day);
        return acc;
    }, {} as { [key: string]: number[] });

    // Formatta il risultato
    return Object.entries(groupedByMonth).map(([monthName, daysArray]) => {

        let days = '';

        for (let i = 0; i < daysArray.length; i++) {
            const day = daysArray[i]
            days = days === '' ? day.toString() : `${days}-${day.toString()}`;
        }

        return `${days} ${monthName}`;

    }).join(', ');
};

export const createImagesArray = (count: number): Image[] => {
    return Array.from({ length: count }, (_, i) => {
        const srcIndex = i + 1;

        return {
            id: i + 1,
            src: `${srcIndex}.jpg`,
            alt: `Image ${i + 1}`
        };
    });
}

export const getPersistentUUID = (key: string) => {
    let uuid = localStorage.getItem(key);
    if (!uuid) {
        uuid = uuidv4();
        localStorage.setItem(key, uuid);
    }
    return uuid;
};

export const getRandomTrainers = (trainers: Trainer[], count: number = 3): Trainer[] => {
    const selected: Trainer[] = [];
    const usedIndices = new Set<number>();

    while (selected.length < count && selected.length < trainers.length) {
        const randomIndex = Math.floor(Math.random() * trainers.length);

        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selected.push(trainers[randomIndex]);
        }
    }

    return selected;
}
