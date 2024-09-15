import { Category, CourseState } from "../context/CourseTypes";

export const courseData: CourseState = {
    title: "Corsi",
    description: "Le nostra offerta propone corsi per:\n\n1. **Bambini dai 6 ai 9 anni** dove si propongono attività per comprendere le basi del coding con giochi o piccole applicazioni.\n2. **Ragazzi dai 10 ai 13 anni** dove implementiamo un piccolo mini gioco con due livelli di difficoltà BASE e AVANZATO.\n3. **Insegnanti** che vogliono avvicinarsi al mondo del coding con scratch.\n4. Altro.",
    courses: [{
        id: "1",
        imgSrc: "scratchprogramming.jpg",
        category: Category.Programmazione,
        price: "Da Definire",
        title: "Introduzione a Scratch per insegnati",
        description: "Il corso è propedeutico per l’introduzione degli insegnati delle scuole primarie all’utilizzo di Scratch come strumenti didattico.",
        trainerName: "Matteo",
        trainerImg: "matteo_balestrini.png",
        usersCount: 8,
        heartsCount: 65,
        delay: 100,
        startDate: "2023-09-15",

    },
    {
        id: "2",
        imgSrc: "scratchprogramming.jpg",
        category: Category.Programmazione,
        price: "50,00 €",
        title: "Dusty Base",
        description: "Attraverso l’utilizzo di Scratch i ragazzi saranno impegnati nella creazione, progettazione di un MINI VIDEOGIOCO. Sviluppare nuove competenze, logica e tanta creatività.",
        trainerName: "Matteo",
        trainerImg: "matteo_balestrini.png",
        usersCount: 10,
        heartsCount: 42,
        delay: 200,
        startDate: "2023-10-01",
        detail: {
            pageTitle: "Dettaglio corso",
            pageSubtitle: "Attraverso l’utilizzo di Scratch i ragazzi saranno impegnati nella creazione, progettazione di un MINI VIDEOGIOCO. Sviluppare nuove competenze, logica e tanta creatività.",
            title: "Dusty",
            subtitle: "Il corso prevedere l'indroduzione dei ragazzi nel mondo del Coding utilizzando Scratch. Andranno ad implementare un piccolo gioco Dusty. Un piccolo aereoplanino che dovrà catturare il maggior numero di Coin prima che il tempo scada.",
            mentor: "Matteo",
            price: "€50.00",
            availableSeats: 9,
            days: [
                {
                    day: "2024/11/5",
                    tabTitle: "Giorno uno",
                    dayTitle: "Il Menu",
                    dayDescription: "Andremo a Familiarizzare con l'ambiente di lavoro Scratch e inizieremo ad implementare il menu del Minigioco Dusty.",
                    imgSrc: 'dusty/corso-Dusty-1.jpg',
                },
                {
                    day: "2024/11/10",
                    tabTitle: "Giorno due",
                    dayTitle: "Il Gioco Parte Uno",
                    dayDescription: "Dopo un breve recap della lezione precedente inizieremo ad implementare il gioco.",
                    imgSrc: 'dusty/corso-Dusty-2.jpg',
                },
                {
                    day: "2024/11/11",
                    tabTitle: "Giorno tre",
                    dayTitle: "Il Gioco Parte due",
                    dayDescription: "Dopo un breve recap della lezione precedente continueremo ad implementare il gioco.",
                    imgSrc: 'dusty/corso-Dusty-2.jpg',
                },
                {
                    day: "2024/11/12",
                    tabTitle: "Giorno quattro",
                    dayTitle: "Conclusione",
                    dayDescription: "Dopo un breve recap della lezione precedente andremo a gestire la fine del gioco. Interviste , saluti e consegna attestato di partecipazione.",
                    imgSrc: 'dusty/corso-Dusty-3.jpg',
                }
            ],
            timeStart: "15:00",
            timeEnd: "17:15",
            imgSrc: "course_01.jpg"

        }
    },
    {
        id: "3",
        imgSrc: "scratchprogramming.jpg",
        category: Category.Programmazione,
        price: "55,00 €",
        title: "Dusty Avanzato",
        description: "Rispetto alla versione base, verranno introdotte delle nozioni più complesse per rendere il gioco più fluido e avvincente.",
        trainerName: "Andrea",
        trainerImg: "andrea_sironi.png",
        usersCount: 8,
        heartsCount: 85,
        delay: 300,
        startDate: "2023-11-20"
    },
    {
        id: "4",
        imgSrc: "scratchprogramming.jpg",
        category: Category.LegoWedo2,
        price: "Da Definire",
        title: "Introduzione a Scratch per insegnati",
        description: "Il corso è propedeutico per l’introduzione degli insegnati delle scuole primarie all’utilizzo di Scratch come strumenti didattico.",
        trainerName: "Matteo",
        trainerImg: "matteo_balestrini.png",
        usersCount: 8,
        heartsCount: 65,
        delay: 100,
        startDate: "2024-09-10"
    },
    {
        id: "5",
        imgSrc: "scratchprogramming.jpg",
        category: Category.Programmazione,
        price: "50,00 €",
        title: "Dusty Base",
        description: "Attraverso l’utilizzo di Scratch i ragazzi saranno impegnati nella creazione, progettazione di un MINI VIDEOGIOCO. Sviluppare nuove competenze, logica e tanta creatività.",
        trainerName: "Matteo",
        trainerImg: "matteo_balestrini.png",
        usersCount: 10,
        heartsCount: 42,
        delay: 200,
        startDate: "2024-12-25"
    },
    {
        id: "6",
        imgSrc: "scratchprogramming.jpg",
        category: Category.Programmazione,
        price: "55,00 €",
        title: "Dusty Avanzato",
        description: "Rispetto alla versione base, verranno introdotte delle nozioni più complesse per rendere il gioco più fluido e avvincente.",
        trainerName: "Andrea",
        trainerImg: "andrea_sironi.png",
        usersCount: 8,
        heartsCount: 85,
        delay: 300,
        startDate: "2025-05-01"
    }
    ]

}
