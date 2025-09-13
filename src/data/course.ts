import { Category, CourseState } from "../context/CourseTypes";
import { getPersistentUUID } from "../utils/utils";

export const courseData: CourseState = {
    id: getPersistentUUID("course-id-0"),
    title: "Corsi",
    description: "Le nostra offerta propone corsi per:\n\n1. **Bambini dagli 8 anni**, con attività che propongono le basi del coding attraverso giochi o piccole applicazioni.\n2. **Ragazzi dai 10 ai 13 anni**, con cui realizziamo un mini gioco con due livelli di difficoltà: BASE e AVANZATO.\n3. **Insegnanti** che desiderano avvicinarsi al mondo del coding utilizzando Scratch.\n4. Altro.",
    courses: [{
        id: getPersistentUUID("course-id"),
        imgSrc: "banner_scratch_docenti_v2.png",
        category: Category.Programmazione,
        price: "",
        title: "Introduzione a Scratch per insegnati",
        description: "Il corso è propedeutico per l’introduzione degli insegnati delle scuole primarie all’utilizzo di Scratch come strumenti didattico.",
        usersCount: 8,
        heartsCount: 65,
        delay: 100,
        startDate: "2023-09-15",
        registration: {
            url: "https://docs.google.com/forms/d/1eiZ0NEciAJRqPjcidkA6TeIGZ5yoSUMe34LajogtZC8/prefill",
            isOpen: true
        },
        detail: {
            pageTitle: "Dettaglio corso",
            pageSubtitle: "Attraverso l’utilizzo di Scratch i ragazzi saranno impegnati nella creazione, progettazione di un MINI VIDEOGIOCO. Sviluppare nuove competenze, logica e tanta creatività.",
            title: "Introduzione a Scratch per insegnanti",
            subtitle: "Questo corso è pensato per insegnanti che vogliono avvicinarsi al mondo del Coding utilizzando Scratch, una piattaforma visiva e intuitiva per la programmazione. Attraverso esercitazioni pratiche, imparerai a creare semplici animazioni e giochi interattivi, acquisendo le competenze necessarie per introdurre il coding in classe e stimolare la creatività e il pensiero computazionale degli studenti.",
            mentor: "",
            price: "",
            availableSeats: "Da definire",
            hoursForDay: 4,
            days: [
                {
                    day: "2024/11/5",
                    tabTitle: "Lezione uno",
                    dayTitle: "Introduzione a Scratch",
                    dayDescription: "In questo corso intensivo di 4 ore, gli insegnanti impareranno le basi di Scratch, una piattaforma di programmazione visiva adatta per introdurre il coding in classe. Attraverso esempi pratici, esploreremo la creazione di semplici animazioni, giochi interattivi e attività educative, fornendo le competenze necessarie per avviare gli studenti al pensiero computazionale in modo creativo e coinvolgente.",
                    imgSrc: 'corso_insegnanti/corso.png',
                },
            ],
            timeStart: "",
            timeEnd: "",
            imgSrc: "banner_scratch_docenti_v2.png",
        }
    },
    {
        id: getPersistentUUID("course-id-1"),
        imgSrc: "banner_scratch_v2.png",
        category: Category.Programmazione,
        price: "",
        title: "Mini gioco con scratch",
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
            title: "Dusty Base",
            subtitle: "Il corso introduce i ragazzi al mondo del Coding attraverso Scratch. Durante il corso, i partecipanti creeranno un semplice gioco chiamato **Dusty**. Il protagonista, un piccolo aereo, dovrà raccogliere il maggior numero di monete possibile prima che il tempo scada.",
            mentor: "",
            price: "",
            availableSeats: 9,
            hoursForDay: 3,
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
            timeStart: "",
            timeEnd: "",
            imgSrc: "course_01.jpg",
            gamesURL: "https://scratch.mit.edu/projects/753135989/embed",
        }
    },
    {
        id: getPersistentUUID("course-id-2"),
        imgSrc: "banner_legowedo_v2.png",
        category: Category.LegoWedo2,
        price: "",
        title: "Introduzione a LEGO WeDo con Scratch",
        description: "E' pensato per avvicinare i bambini al mondo della robotica e della programmazione. Utilizzando i kit LEGO WeDo e il linguaggio visivo Scratch, i partecipanti impareranno a creare e programmare semplici robot, sviluppando capacità logiche e creative in modo divertente e interattivo.",
        usersCount: 8,
        heartsCount: 85,
        delay: 300,
        startDate: "2023-11-20"
    },
    {
        id: getPersistentUUID("course-id-5"),
        imgSrc: "banner_3d_v2.png",
        category: Category.Stampa3D,
        price: "",
        title: "Introduzione alla stampa 3D",
        description: "E' progettato per avvicinare i giovani al mondo della progettazione e della stampa 3D, offrendo un'esperienza creativa e pratica. Durante il corso, i partecipanti impareranno a utilizzare software di modellazione 3D, esploreranno il funzionamento delle stampanti 3D e realizzeranno i loro primi oggetti personalizzati. Un'opportunità per scoprire le tecnologie digitali divertendosi e sviluppando nuove competenze tecniche e artistiche",
        usersCount: 8,
        heartsCount: 85,
        delay: 300,
        startDate: "2025-05-01"
    },
    {
        id: getPersistentUUID("course-id-6"),
        imgSrc: "banner_microbit_v2.png",
        category: Category.Microbit,
        price: "",
        title: "Introduzione a Microbit",
        description: "Introduzione a Microbt è pensato per fornire le basi sull'uso della scheda Microbit, uno strumento educativo versatile per l'apprendimento della programmazione e dell'elettronica. Durante il corso, esplorerai le funzionalità del dispositivo, imparerai a programmare semplici applicazioni interattive e scoprirai come creare progetti creativi utilizzando sensori, LED e altri componenti. Il corso è ideale per principianti e appassionati di tecnologia",
        usersCount: 8,
        heartsCount: 85,
        delay: 300,
        startDate: "2023-05-05"
    },
    ]

}
