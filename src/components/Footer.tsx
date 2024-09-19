import { useAppContext } from "../context/AppContext";
import Markdown from "react-markdown";

const Footer: React.FC = () => {
    const { state } = useAppContext();

    const { footer: footerData } = state;

    const {
        sitename,
        contactInfo,
        socialLinks,
        usefulLinks,
        services,
        copyright,
        credits,
        creditsUrl
    } = footerData;

    return (
        <footer id="footer" className="footer position-relative light-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename">{sitename}</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>{contactInfo.address}</p>
                            <p>{contactInfo.city}</p>
                            <p>
                                <strong>Email:</strong> <span>{contactInfo.email}</span>
                            </p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href={socialLinks.facebook}><i className="bi bi-facebook"></i></a>
                            <a href={socialLinks.instagram}><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Link utili</h4>
                        <ul>
                            {usefulLinks.map((link, index) => (
                                <li key={index}><a href={link.url}>{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>I nostri servizi</h4>
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}><a href={service.url}>{service.label}</a></li>
                            ))}
                        </ul>
                    </div>
                    {contactInfo.email && (
                        <div className="col-lg-4 col-md-12 footer-newsletter">
                            <a
                                href={`mailto:${contactInfo.email}?subject=Richiesta%20Informazioni&body=Salve,%20ho%20bisogno%20di%20maggiori%20informazioni.`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button type="button" className="button-contact-me">
                                    Scrivici
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p><Markdown>{copyright}</Markdown></p>
                {credits && creditsUrl && (
                    <div className="credits">
                        Designed by <a href={creditsUrl}>{credits}</a>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;