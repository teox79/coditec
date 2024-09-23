import { TrainerState } from "../context/TrainerType";
import { getPersistentUUID } from "../utils/utils";

export const trainerData: TrainerState = {
    id: getPersistentUUID("trainer"),
    title: "Mentors",
    description: "I “Mentor” nei coderdojo di tutto il mondo assistono i partecipanti ai nostri corsi di programmazione. C’è chi è più esperto a programmare, chi aiuta nella logistica, chi semplicemente è presente come supporto: i mentor possono essere programmatori esperti o semplicemente persone che desiderano mettere a disposizione un pò del loro tempo per aiutare ad organizzare gli incontri.",
    trainers: [
        {
            id: getPersistentUUID("trainer-1"),
            name: "Matteo Balestrini",
            role: "Software Engineer",
            description: "Sono Papà di due splendide bambine, lavoro da più di 20 anni nel mondo della programmazione. Ritengo importante per i bambini e non solo avvicinarsi al mondo dell’informatica.",
            imageUrl: "matteo_balestrini.png",
        },
        {
            id: getPersistentUUID("trainer-2"),
            name: "Andrea Sironi",
            role: "Designer",
            description: "Lavoro nel mondo del Design ormadi da più di 10 anni. Mi piace dilettarmi con il bricolage.",
            imageUrl: "andrea_sironi.png",
            /*socialLinks: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#",
            },*/
        },
        {
            id: getPersistentUUID("trainer-3"),
            name: "Davide",
            role: "Faccio tutto",
            description: "Mi chiamo Davide .........",
            imageUrl: "trainer-1.jpg",
        },
        {
            id: getPersistentUUID("trainer-4"),
            name: "Gionata",
            role: "Software Engineer",
            description: "Mi chiamo Gionata .........",
            imageUrl: "trainer-3.jpg",
        },
        {
            id: getPersistentUUID("trainer-5"),
            name: "Sabina",
            role: "Professoressa",
            description: "Mi chiamo Sabina .........",
            imageUrl: "trainer-2.jpg",
        },
        {
            id: getPersistentUUID("trainer-6"),
            name: "Emanuela",
            role: "Impiegata",
            description: "Mi chiamo Emanuela .........",
            imageUrl: "trainer-2-2.jpg",
        },

        // Aggiungi altri membri
    ]
}
