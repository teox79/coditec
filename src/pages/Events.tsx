import React from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import { getFutureEvents } from '../utils/utils';

const Events: React.FC = () => {

  const { state } = useAppContext();
  const { event: eventData, ui: ui } = state;
  const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Eventi', url: '' }];
  const futureEvents = getFutureEvents(eventData.events || []);

  return (
    <main className="main">
      <PageTitle description={eventData.description || ''} title={eventData.title || ''} breadcrumbs={breadcrumbs} />
      <section id="events" className="events section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {futureEvents.map((event) => {

              const { registration } = event;
              const isOpen = (registration?.isOpen || false && registration?.url || '');

              return (
                <div key={event.id} className="col-md-6 d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-img">
                      <img src={`${ui.globalUi.baseUrl}assets/img/events/${event.imageUrl}`} alt={event.title} className="img-fluid" style={{ maxWidth: "636px", maxHeight: "424px" }} />
                    </div>
                    <div className="card-body" style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div>
                        {event.isFreeEvent && (<div className='free-badge-container'><span className="free-badge">EVENTO GRATUITO</span></div>)}
                        <h5 className="card-title">
                          <a href="#">{event.title}</a>
                        </h5>
                        <p className="fst-italic text-center" style={{ marginBottom: 0 }}>{event.date}</p>
                        <p className="fst-italic text-center">{event.location}</p>
                        <p className="card-text">{event.description}</p>

                      </div>
                      <div>
                        {registration && (
                          <div className="registration" style={{ textAlign: 'center' }}>
                            <div>
                              {!isOpen ? (
                                <span className="event-registration-info">Le iscrizioni apriranno a breve</span>
                              ) : (
                                <a
                                  className="generic-btn generic-btn-large"
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
      </section>
    </main>
  );
}

export default Events;
