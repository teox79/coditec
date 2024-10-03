import { EventState } from "../context/EventType";
import { getPersistentUUID } from "../utils/utils";


export const eventData: EventState = {
    id: getPersistentUUID("event"),
    title: "Prossimi Eventi",
    description: "Eventi in programma nei prossimi mesi..",
    events: [
        {
            id: getPersistentUUID("event-1"),
            title: "Coderdojo",
            date: "Sabato, 2 Settembre 2023 alle 15:00",
            location: "Via Fratelli d'italia 21 Mariano Comense",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2023-09-02",
            registration: {
                url: "https://www.eventbrite.it/"
            },
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-2"),
            title: "Coderdojo",
            date: "Sabato, 28 Settembre 2024 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2024-09-28",
            registration: {
                url: "https://docs.google.com/forms/d/1rOki8kfKIBmCYH-So_4ccMmZ0UcKMeJE2hhoyIqZBWg/prefill",
            },
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-3"),
            title: "Coderdojo",
            date: "Sabato, 26 Ottobre 2024 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2024-10-26",
            registration: {
                url: "https://docs.google.com/forms/d/1eiZ0NEciAJRqPjcidkA6TeIGZ5yoSUMe34LajogtZC8/prefill",
                isOpen: true
            },
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-4"),
            title: "Coditec",
            date: "Sabato, 09 Novembre 2024 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Unisciti a noi per un entusiasmante evento dedicato ai ragazzi (1 giornata), dove potranno esplorare il mondo della programmazione e della robotica! Utilizzando LEGO WeDo, Scratch e Micro bit" +
                ", i partecipanti avranno l'opportunità di creare progetti interattivi, sviluppare competenze tecniche e dare vita alla loro immaginazione con attività pratiche e divertenti. Un'esperienza educativa e coinvolgente per scoprire le meraviglie della tecnologia!",
            imageUrl: "banner_coditec.jpeg",
            startDate: "2024-11-09",
            registration: {
                maxParticipants: 0,
                participants: 0,
                url: "https://www.eventbrite.it/"
            }
        },
        {
            id: getPersistentUUID("event-5"),
            title: "Coditec",
            date: "Sabato, 19 Novembre 2024 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Unisciti a noi per un entusiasmante evento dedicato ai ragazzi (2 giornata), dove potranno esplorare il mondo della programmazione e della robotica! Utilizzando LEGO WeDo, Scratch e Micro bit" +
                ", i partecipanti avranno l'opportunità di creare progetti interattivi, sviluppare competenze tecniche e dare vita alla loro immaginazione con attività pratiche e divertenti. Un'esperienza educativa e coinvolgente per scoprire le meraviglie della tecnologia!",
            imageUrl: "banner_coditec.jpeg",
            startDate: "2024-11-19",
        },
        {
            id: getPersistentUUID("event-6"),
            title: "Coditec",
            date: "Sabato, 23 Novembre 2024 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Unisciti a noi per un entusiasmante evento dedicato ai ragazzi (3 giornata), dove potranno esplorare il mondo della programmazione e della robotica! Utilizzando LEGO WeDo, Scratch e Micro bit" +
                ", i partecipanti avranno l'opportunità di creare progetti interattivi, sviluppare competenze tecniche e dare vita alla loro immaginazione con attività pratiche e divertenti. Un'esperienza educativa e coinvolgente per scoprire le meraviglie della tecnologia!",
            imageUrl: "banner_coditec.jpeg",
            startDate: "2024-11-23",
        },
        {
            id: getPersistentUUID("event-7"),
            title: "Coderdojo",
            date: "Sabato, 14 Dicembre 2024 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2024-12-14",
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-8"),
            title: "Coderdojo",
            date: "Sabato, 18 Gennaio 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2025-01-18",
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-9"),
            title: "Coditec",
            date: "Sabato, 08 Febbrazio 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Partecipa a un'esperienza unica di apprendimento e creatività dedicata ai ragazzi! Durante questo corso (1 giornata), i partecipanti scopriranno il mondo della stampa 3D, imparando a progettare e realizzare oggetti tridimensionali utilizzando software di modellazione. Attraverso attività pratiche e divertenti, i ragazzi svilupperanno competenze tecniche e creative, portando a casa le loro creazioni personalizzate. Un'occasione perfetta per esplorare le possibilità della tecnologia e dare forma alle idee!",
            imageUrl: "banner_coditec.jpeg",
            startDate: "2025-02-08",
        },
        {
            id: getPersistentUUID("event-10"),
            title: "Coditec",
            date: "Sabato, 15 Febbrazio 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Partecipa a un'esperienza unica di apprendimento e creatività dedicata ai ragazzi! Durante questo corso (2 giornata), i partecipanti scopriranno il mondo della stampa 3D, imparando a progettare e realizzare oggetti tridimensionali utilizzando software di modellazione. Attraverso attività pratiche e divertenti, i ragazzi svilupperanno competenze tecniche e creative, portando a casa le loro creazioni personalizzate. Un'occasione perfetta per esplorare le possibilità della tecnologia e dare forma alle idee!",
            imageUrl: "banner_coditec.jpeg",
            startDate: "2025-02-15",
        },
        {
            id: getPersistentUUID("event-11"),
            title: "Coditec",
            date: "Sabato, 22 Febbrazio 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Partecipa a un'esperienza unica di apprendimento e creatività dedicata ai ragazzi! Durante questo corso (3 giornata), i partecipanti scopriranno il mondo della stampa 3D, imparando a progettare e realizzare oggetti tridimensionali utilizzando software di modellazione. Attraverso attività pratiche e divertenti, i ragazzi svilupperanno competenze tecniche e creative, portando a casa le loro creazioni personalizzate. Un'occasione perfetta per esplorare le possibilità della tecnologia e dare forma alle idee!",
            imageUrl: "banner_coditec.jpeg",
            startDate: "2025-02-22",
        },
        {
            id: getPersistentUUID("event-12"),
            title: "Coderdojo",
            date: "Sabato, 22 Marzo 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2025-03-22",
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-13"),
            title: "Coderdojo",
            date: "Sabato, 12 Aprile 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2025-04-12",
            isFreeEvent: true
        },
        {
            id: getPersistentUUID("event-14"),
            title: "Coderdojo",
            date: "Sabato, 07 Giugno 2025 alle 15:00",
            location: "Via Cavour 1 Lentate Sul Seveso",
            description: "Appuntamento mensile del CoderdoJo. In queste 3 ore si cercherà di avvicinare i bambini ed i ragazzi (tra 7 e 17 anni) all’informatica attraverso la realizzazione di club di programmazione gratuiti per incentivare il pensiero computazionale e coding. Serve un PC portatile e tanta voglia d’imparare.",
            imageUrl: "locandina_coderdojo_groane.jpg",
            startDate: "2025-06-07",
            isFreeEvent: true
        },
    ]

}
