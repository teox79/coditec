import React from 'react';
import { Event } from '../../context/EventType';
import { ManageUiState } from '../../context/UiTypes';

interface EventCardProps {
    event: Event;
    isOpen: boolean;
    uiData: ManageUiState;
    showImage?: boolean;
    eventDate?: string;
    cardTitle?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, isOpen, uiData, showImage = true }) => {
    if (!event) return <></>
    const eventRegistration = event?.registration;

    return (
        <div className="events card">
            {showImage && (
                <div className="card-img">
                    <img
                        src={`${uiData.globalUi.baseUrl}assets/img/events/${event.imageUrl}`}
                        alt={event.cardTitle}
                        className="img-fluid"
                        style={{ maxHeight: "424px" }}
                    />
                </div>
            )}
            <div className="card-body mt-0">
                {event.isFreeEvent && (
                    <div className='free-badge-container'>
                        <span className="free-badge">EVENTO GRATUITO</span>
                    </div>
                )}
                <h5 className="card-title">
                    <a href="#/events">{event.cardTitle}</a>
                </h5>
                <p className="fst-italic text-center">{event.eventDate}</p>
                <p className="fst-italic text-center">{event.location}</p>
                <p className="card-text">{event.description}</p>

                <div style={{ textAlign: 'center' }}>
                    {eventRegistration && (
                        <div className="registration">
                            <div>
                                {!isOpen ? (
                                    <span className="event-registration-info">Le iscrizioni apriranno a breve</span>
                                ) : (
                                    <a
                                        className="generic-btn generic-btn-large"
                                        href={eventRegistration.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Iscriviti
                                    </a>
                                )}
                            </div>
                            {((eventRegistration.participants || 0) > 0 && (eventRegistration.maxParticipants || 0) > 0) && (
                                <div className="trainer-rank d-flex align-items-center info-container">
                                    Posti disponibili:&nbsp;&nbsp;
                                    <i className="bi bi-person heart-icon"></i>&nbsp;
                                    {eventRegistration.participants} / {eventRegistration.maxParticipants}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
