import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Event } from '../../context/EventType';

interface EventsSectionProps {
  futureEvents: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ futureEvents }) => {
  const { state } = useAppContext();
  const { ui: uiData } = state;

  return (
    <section id="events_section" className="events section">
      <div className="container section-title" data-aos="fade-up">
        <h2>EVENTI</h2>
        <p>I PROSSIMI EVENTI</p>
      </div>
      <div className="container">
        <div className="row">
          {futureEvents.map((event) => {
            const { registration } = event;
            const isOpen = (registration?.isOpen || false && registration?.url || '');

            return (
              <div key={event.id} className="col-md-6 d-flex align-items-stretch">
                <div className="card" style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  
                    <div className="card-img" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={`${uiData.globalUi.baseUrl}assets/img/events/${event.imageUrl}`}
                        alt={event.title}
                        className="img-fluid"
                        style={{ maxHeight: "424px" }}
                      />
                    </div>
                    <div className="card-body">
                      {event.isFreeEvent && (<div className='free-badge-container'><span className="free-badge">EVENTO GRATUITO</span></div>)}

                      <h5 className="card-title">
                        <a href="#">{event.title}</a>
                      </h5>
                      <p className="fst-italic text-center" style={{ marginBottom: 0 }}>{event.date}</p>
                      <p className="fst-italic text-center">{event.location}</p>
                      <p className="card-text">{event.description}</p>
                  
                      <div style={{ textAlign: 'center' }}>
                        {registration && (
                          <div className="registration">
                            <div className="button-container">
                              {!isOpen ? (
                                <span className="text-success text-center">Le iscrizioni apriranno a breve</span>
                              ) : (
                                <a
                                  className="load-more-button"
                                  href={registration.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Iscriviti
                                </a>
                              )}
                            </div>
                            {registration?.participants || 0 > 0 && registration?.maxParticipants || 0 > 0 && (
                              <div className="trainer-rank d-flex align-items-center info-container">
                                Posti disponibili:&nbsp;&nbsp;
                                <i className="bi bi-person heart-icon"></i>&nbsp;
                                {registration.participants} / {registration.maxParticipants}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
};

export default EventsSection;
