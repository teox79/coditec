import { FooterState } from "../context/Type"

export const footerData: FooterState = {
    sitename: "Coditec",
    contactInfo: {
        address: "Via Cesare Battisti, 14",
        city: "Lentate sul Seveso",
        phone: "+1 5589 55488 55",
        email: "info@coditec.it",
        maps: "https://maps.app.goo.gl/nBpYaxY1F227jWHz9"
    },
    socialLinks: {
        twitter: "#",
        facebook: "https://www.facebook.com/CoDiTec2022/",
        instagram: "https://www.instagram.com/comitato_coditec/",
        linkedin: "#"
    },
    usefulLinks: [
        { label: "Home", url: "/" },
        { label: "Chi siamo", url: "/about" },
        { label: "Mentors", url: "/mentors" },
    ],
    services: [
        { label: "Corsi", url: "/courses" },
        { label: "Eventi", url: "/events" },
    ],
    newsletter: {
        heading: "Newsletter",
        description: "Iscriviti alla nostra newsletter e ricevi le ultime notizie sui nostri corsi"
    },
    copyright: "© Copyright **Coditec** All Rights Reserved",
    credits: "",
    creditsUrl: ""
}
