import { ContactState } from "../context/Contact";
import { getPersistentUUID } from "../utils/utils";

export const contactData: ContactState = {
    id: getPersistentUUID("contact-id"),
    title: "Contattaci",
    description: "Se vuoi più informazioni contattaci con il form sotto o inviaci un email all'indirizzo indicato.",
    contactInfo: {
        address: 'Via Cesare Battisti, 12, 20823 Lentate sul Seveso MB, Italia',
        phone: '+1 5589 55488 55',
        email: 'info@coditec.it',
    },
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5575.233003477688!2d9.113132902199519!3d45.67859858431309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786979933c1260f%3A0xaf3ab0923a039272!2s20823%20Lentate%20sul%20Seveso%20MB%2C%20Italia!5e0!3m2!1sit!2sch!4v1728133309014!5m2!1sit!2sch"
}
