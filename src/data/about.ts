import { AboutState } from "../context/AboutTypes";
import { getPersistentUUID } from "../utils/utils";


export const aboutData: AboutState = {
    id: getPersistentUUID("about-id"),
    title: "Chi Siamo",
    description: "Coditec è un comitato che si compone di un team di professionisti e volontari che collaborano per diffondere a tutti la conoscenza tecnologica e informatica sia in età scolare che adulta, come le nozioni base per imparare a programmare. Ogni collaboratore dedica con passione il suo tempo per divulgare queste conoscenze. I nostri corsi si tengono in Brianza a Lentate Sul Seveso ma siamo ben lieti di offrire i nostri servizi anche per i cittadini delle province limitrofe e non solo. Negli anni abbiamo collaborato con i comuni di Lentate, Barlassina, Birago, Copreno.",
    testimonial: {
        title: 'Testimonianze',
        subtitle: 'Cosa dicono di coditec',
        testimonials: [
            {
                imgSrc: "testimonials-1.jpg",
                name: "Elisa",
                title: "3 elementare",
                stars: 5,
                quote: "Mi sono proprio divertata grazie Coditec.",
            },
            {
                imgSrc: "testimonials-2.jpg",
                name: "Andrea",
                title: "5 elementare",
                stars: 5,
                quote: "Che soddisfazione creare un videogioco.",
            },
            {
                imgSrc: "testimonials-3.jpg",
                name: "Mauro",
                title: "1 media",
                stars: 5,
                quote: "Finalmente sono riuscito ad animare il mio lego con scratch e lego wedo. Grazie Coditec.",
            },
            {
                imgSrc: "testimonials-1.jpg",
                name: "Sara",
                title: "5 elementare",
                stars: 5,
                quote: "Grazie d'esistere Coditec",
            },
        ],
    }
}
