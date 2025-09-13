import { Course, FiltersType } from "../context/CourseTypes";
import { Event } from "../context/EventType";
import { Image } from "../context/GalleryTypes";
import { v4 as uuidv4 } from 'uuid';
import { Trainer } from "../context/TrainerType";

export const getCoursesByDateOrYear = (
    courses: Course[],
    dateOrYear: Date | number,
    sortOrder: 'asc' | 'desc' = 'asc', // Parametro per ordinamento, default è 'asc'
    count?: number,
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

    // Se `count` non è definito o è zero, restituisce tutti i corsi filtrati
    return typeof count === 'number' && count > 0
        ? filteredCourses.slice(0, count)
        : filteredCourses;
};

export const getPastCourses = (
    courses: Course[],
    sortOrder: 'asc' | 'desc' = 'asc', // Parametro per ordinamento, default è 'asc'
    count?: number, // Parametro opzionale per limitare il numero di risultati
): Course[] => {
    const today = new Date(); // Data odierna
    today.setHours(0, 0, 0, 0); // Imposta l'ora a mezzanotte per evitare problemi di precisione

    // Filtra i corsi che sono iniziati prima di oggi
    let pastCourses = courses.filter((course) => {
        if (!course.startDate) return false;
        const courseDate = new Date(course.startDate);
        return courseDate < today; // Corsi prima di oggi
    });

    // Ordina i corsi per data
    pastCourses.sort((a, b) => {
        const dateA = new Date(a.startDate!).getTime();
        const dateB = new Date(b.startDate!).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    // Se `count` non è definito o è zero, restituisce tutti i corsi filtrati
    return typeof count === 'number' && count > 0
        ? pastCourses.slice(0, count)
        : pastCourses;
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

    return { categories, years };
};


export const getFutureEvents = (events: Event[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Imposta l'ora a mezzanotte per confronti accurati

    return events
        .filter(event => {
            if (!event.startDate) return true; // Include eventi senza data
            const eventDate = new Date(event.startDate);
            eventDate.setHours(0, 0, 0, 0); // Imposta l'ora a mezzanotte
            return eventDate >= today; // Confronta correttamente le date
        })
        .sort((a, b) => {
            if (!a.startDate) return 1; // Eventi senza data in fondo
            if (!b.startDate) return -1;
            return new Date(a.startDate).getTime() - new Date(b.startDate).getTime(); // Ordina per data
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
