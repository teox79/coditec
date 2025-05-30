import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Event } from '../../context/EventType';
import EventCard from './EventCard';
import { useErrorHandler } from '../../hooks/useErrorHandler';
import LoadingState from '../Common/LoadingState';
import ErrorBoundary from '../Common/ErrorBoundary';

interface EventsSectionProps {
  futureEvents: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ futureEvents }) => {
  const { state } = useAppContext();
  const { ui: uiData } = state;
  const { error, handleError, clearError } = useErrorHandler();

  const renderEventCard = (event: Event) => {
    try {
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
    } catch (error) {
      handleError(error, 'EventsSection.renderEventCard');
      return null;
    }
  };

  return (
    <ErrorBoundary>
      <section id="events_section" className="events section">
        <div className="container section-title" data-aos="fade-up">
          <h2>EVENTI</h2>
          <p>I PROSSIMI EVENTI</p>
        </div>
        <div className="container">
          <LoadingState
            isLoading={false}
            error={error}
            onErrorDismiss={clearError}
          >
            <div className="row">
              {futureEvents.map(renderEventCard)}
            </div>
          </LoadingState>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default EventsSection;
