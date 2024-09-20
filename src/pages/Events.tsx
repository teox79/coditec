import React from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import { getFutureEvents } from '../utils/utils';

const Events: React.FC = () => {

    const { state } = useAppContext();
    const { event: eventData, ui: ui } = state;
    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Eventi', url: '' }];
<<<<<<< HEAD
=======

    // Ottenere la data corrente
    const now = new Date();

>>>>>>> origin/main
    const futureEvents = getFutureEvents(eventData.events || []);

    return (
        <main className="main">
            <PageTitle description={eventData.description || ''} title={eventData.title || ''} breadcrumbs={breadcrumbs} />
            <section id="events" className="events section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {futureEvents.map((event) => {

                            const { registration } = event;
                            const isFull = (registration?.participants || 0) >= (registration?.maxParticipants || 0);

                            return (
                                <div key={event.id} className="col-md-6 d-flex align-items-stretch">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={`${ui.globalUi.baseUrl}assets/img/events/${event.imageUrl}`} alt={event.title} className="img-fluid" style={{ maxWidth: "636px", maxHeight: "424px" }} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <a href="#">{event.title}</a>
                                            </h5>
                                            <p className="fst-italic text-center" style={{ marginBottom: 0 }}>{event.date}</p>
                                            <p className="fst-italic text-center">{event.location}</p>
                                            <p className="card-text">{event.description}</p>
                                            {isFull ? (
                                                <p className="text-warning text-center">Evento al completo</p>
                                            ) : (
                                                registration && (
                                                    <div className="registration">
                                                        <div className="button-container">
                                                            <a
                                                                className="load-more-button"
                                                                href={registration.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Iscriviti
                                                            </a>
                                                        </div>
                                                        <div className="trainer-rank d-flex align-items-center info-container">
                                                            Posti disponibili:
                                                            &nbsp;&nbsp;
                                                            <i className="bi bi-person heart-icon"></i>&nbsp;
                                                            {registration.participants} / {registration.maxParticipants}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Events;
