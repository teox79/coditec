import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Event } from '../../context/EventType';
import EventCard from './EventCard';

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
            const isOpen = (registration?.isOpen || false && registration?.url || false);

            return (
              <div key={event.id} className="col-md-6 d-flex align-items-stretch">
                <EventCard
                  event={event}
                  isOpen={isOpen}
                  uiData={uiData}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
};

export default EventsSection;
