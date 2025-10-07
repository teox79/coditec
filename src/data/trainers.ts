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
            description: "Sono papà di due splendide bambine e lavoro da oltre vent’anni come web developer. La programmazione è sempre stata la mia passione e credo fortemente che avvicinare i bambini — e non solo — al mondo dell’informatica sia un passo importante per il loro futuro. Nel tempo libero mi piace dedicarmi allo sport e fare giri in moto, due passioni che mi regalano energia e libertà.",
            imageUrl: "matteo_balestrini.png",
            socialLinks: {
                linkedin: "www.linkedin.com/in/matteo-balestrini-64a13225",
                facebook: "https://www.facebook.com/teox79",
            }
        },
        {
            id: getPersistentUUID("trainer-2"),
            name: "Andrea Sironi",
            role: "Designer",
            description: "Sono Andrea Sironi. Come designer della comunicazione, in ormai 20 anni di esperienza ho sempre lavorato in ambito web/digital unendo la mia passione per la grafica con un forte interesse per il mondo della tecnologia e la sua continua ecoluzione. Nel tempo libero invece mi piace fuggire dagli schermi e tuffarmi nella natura, in particolare in montagna, e con cammini anche di più giorni.",
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
            role: "Project Manager",
            description: "Ciao a tutti mi chiamo Davide e sono un Project Manager certificato PRINCE2 specializzato nelle Telecomunicazioni, nello specifico in avionica,  e sistemi radar. Oltre alla tecnologia, sono appassionato di arte rinascimentale e tutto quello che riguarda l’arte in  digitale e la comunicazione visiva. Nel tempo libero mi diletto con: -Video editor, Graphic designer, e illustratore tradizionale - Digital sculpting  e modellazione 3D - Domotica addicted",
            imageUrl: "davide.png",
        },
        {
            id: getPersistentUUID("trainer-4"),
            name: "Gionata Maran",
            role: "Software Engineer",
            description: "Mi chiamo Gionata Maran lavoro in campo informatico da oltre 30 anni. Sono padre di 2 figli e credo che nell'epoca in cui viviamo tutti i giovani ma anche tutte le persone dovrebbero conoscere come funziona la tecnologia per poterla utilizzare al meglio in maniera attiva e non passiva. Nel tempo libero progetto oggetti che stampo con la stampante 3D. Il mio motto è: l'unica certezza è il cambiamento!",
            imageUrl: "gionata.png",
        },
        {
            id: getPersistentUUID("trainer-5"),
            name: "Elena Nava",
            role: "Pedagogista",
            description: "Mi chiamo Elena Nava e sono una Media Educator, pedagogista specializzata in ambito digitale. Mi sono laureata da poco e ora giro tra le scuole portando progetti di informatica, coding e robotica. Credo che nel mondo di oggi sia necessario educare le nuove generazioni ad un uso consapevole del mondo digitale e, allo stesso tempo, utilizzare la tecnologia digitale per sviluppare nuove competenze nelle ragazze e nei ragazzi di oggi. Oltre a questo mi piace praticare sport e stare all'aria aperta.",
            imageUrl: "elena.png",
        },
        {
            id: getPersistentUUID("trainer-6"),
            name: "Daniele Gallo",
            role: "Ingegnere",
            description: "Mi chiamo Daniele Gallo e sono uno studente della facoltá di ingegneria dell'automazione presso il Politecnico di Milano. Nel mio tempo libero mi dedico all'oratorio del mio paese, allo sport e alle mie passioni tra cui i fumetti, i film, i videogiochi e le nuove frontiere della tecnologia. Quest'ultime trovano sempre il modo di stupirmi ed è per questo che cerco sempre di informarmi e di rimanere aggiornato su tutto ciò che riguarda il mondo tecnologico.",
            imageUrl: "daniele.png",
        },
        {
            id: getPersistentUUID("trainer-7"),
            name: "Emanuela",
            role: "Impiegata",
            description: "Mi chiamo Emanuela Terraneo sono la collaboratrice di un notaio da quasi trent'anni. Sono mamma di 2 ragazzi. Sono da sempre stata impegnata nelle realtà lentatesi, in vari ambiti (parrocchia, scuola, sport). Credo nell'importanza di insegnare un uso consapevole della tecnologia. Sono una creativa e nel tempo libero mi piace sperimentare nuove tecniche per creare oggetti.",
            imageUrl: "emanuela.png",
        },
        {
            id: getPersistentUUID("trainer-8"),
            name: "William",
            role: "Studente",
            description: "Mi chiamo William, mi sono appena diplomato e ho iniziato un percorso di studi universitari nell’ambito informatico. Ho una grande passione per la tecnologia e mi piace rimanere aggiornato sulle ultime novità del settore.",
            imageUrl: "william.png",
        },

        // Aggiungi altri membri
    ]
}
