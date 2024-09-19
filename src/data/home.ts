import { HomeState } from "../context/HomeType";
import { getPersistentUUID } from "../utils/utils";

export const homeData: HomeState = {
    id: getPersistentUUID("home"),
    title: "Il modo migliore per imparare è divertendosi.",
    description: "Siamo un team di professionisti che insegna ai ragazzi la logica di programmazione.",
    link: {
        url: '/courses',
        label: 'Corsi',
        target: ''
    },
    organization: {
        title: "CODITECT",
        subtitle: "Comitato per la divulgazione tecnologica al cittadino",
        description: "Il nostro comitato si basa su 3 punti fondamentali:",
        points: [
            { description: "Si propone di diffondere la conoscenza tecnologica e informatica al cittadino sia in età scolare che in età adulta, al fine di rendere il cittadino stesso edotto e consapevole dell’esistenza di strumenti e metodologie per accrescere la propria cultura e migliorare la propria qualità della vita nella risoluzione e nello svolgimento delle attività quotidiane." },
            { description: "Non persegue finalità di lucro e non ha né svolge attività commerciali. Pertanto tutte le cariche degli organi di rappresentanza del Comitato sono gratuite e gratuite sono le prestazioni degli aderenti." },
            { description: "È una struttura democratica ed è un organo autonomo, indipendente da ogni organizzazione o movimento politico e/o confessionale." }
        ]
    },
    statistics: [
        { description: "Partecipanti", value: 100 },
        { description: "Corsi", value: 2 },
        { description: "Eventi", value: 20 },
        { description: "Mentors", value: 5 }
    ],
    whyUs: {
        title: "Perchè scegliere Coditec",
        description: "Scegliere dei professionisti è sempre la scelta migliore quando si cerca un servizio di qualità. Noi cerchiamo di esserlo, ma desideriamo siano i nostri ragazzi a ritenerci tali, per questo c’impegnano per migliorarci. Se dovessimo rispondere alla domanda: “perchè; sceglierci?” molto probabilmente lo faremmo elencando questi 5 semplici ma importanti aspetti:",
        points: [
            {
                title: "Passione",
                description: "Mettere passione in quello che si fa significa impegnarsi in ogni momento e con ogni mezzo, i nostri mentor amano quello che fanno e per questo motivo ci tengono a seguire i ragazzi. Condividiamo poi le nostre competenze a chiunque grazie ai corsi che proponiamo, nella speranza che quello che insegniamo sia d’interesse ed aiuto.",
                icon: "heart"
            },
            {
                title: "Esperienza",
                description: "Senza la dovuta esperienza alle spalle è difficile riuscire ad insegnare qualcosa di qualità. Noi ci occupiamo di scratch da oltre 5 anni, di sessioni di Coderdojo e corsi di Coditech ne abbiamo fatte veramente tanti e continuiamo a farli e ci hanno permesso di crescere sempre più.",
                icon: "calendar2"
            },
            {
                title: "Creatività",
                description: "Un’altra importante caratteristica è la creatività che cerchiamo di infondere in ogni corso che proponiamo. Noi ci teniamo molto a questo aspetto.",
                icon: "lightbulb"
            }
        ]
    },
    features: [
        { icon: "scratch.png", title: "Scratch", url: 'https://scratch.mit.edu/' },
        { icon: "microBit.png", title: "MicroBit", url: 'https://microbit.org/' },
        { icon: "wedo2.jpg", title: "Lego Wedo", url: '' },
    ],
    course: {
        title: 'corsi',
        subtitle: 'corsi più popolari',
    }
}
