import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';

const Contact: React.FC = () => {
    const { state } = useAppContext();
    const { contact: contactData } = state;

    // Stato per gestire i campi del form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Contatti', url: '' }];

    // Funzione per aggiornare lo stato quando cambia un campo
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Costruisci dinamicamente il link mailto
    const mailtoLink = `mailto:${contactData?.contactInfo?.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;

    return (
        <main className="main">
            <PageTitle description={contactData.description || ''} title={contactData.title || ''} breadcrumbs={breadcrumbs} />
            <section id="contact" className="contact section">
                <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                    <iframe
                        style={{ border: 0, width: '100%', height: '300px' }}
                        src={contactData.googleMapUrl}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {contactData.contactInfo && (
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4">
                            <div className="col-lg-4">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Indirizzo</h3>
                                        <p>{contactData.contactInfo.address}</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email</h3>
                                        <p>{contactData.contactInfo.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                    <div className="row gy-4">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                placeholder="Oggetto"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows={6}
                                                placeholder="Messaggio"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
                                                <button type="button" className="button-contact-me">
                                                    Invia
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Contact;
