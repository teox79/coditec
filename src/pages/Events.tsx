import React from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import { getFutureEvents } from '../utils/utils';

const Events: React.FC = () => {

    const { state } = useAppContext();
    const { event: eventData } = state;
    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Eventi', url: '' }];

    const futureEvents = getFutureEvents(eventData.events || []);

    return (
        <main className="main">
            <PageTitle description={eventData.description || ''} title={eventData.title || ''} breadcrumbs={breadcrumbs} />
            <section id="events" className="events section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {futureEvents.map((event) => (
                            <div key={event.id} className="col-md-6 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={`/assets/img/events/${event.imageUrl}`} alt={event.title} className="img-fluid" style={{ maxWidth: "636px", maxHeight: "424px" }} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="#">{event.title}</a>
                                        </h5>
                                        <p className="fst-italic text-center" style={{ marginBottom: 0 }}>{event.date}</p>
                                        <p className="fst-italic text-center">{event.location}</p>
                                        <p className="card-text">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Events;