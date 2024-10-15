import React from 'react'
import {
    EventApi,
    EventClickArg,
    EventContentArg,
    formatDate,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useAppContext } from '../../context/AppContext'
import classNames from 'classnames'
import OffCanvasCustom from './OffCanvasCustom'
import 'bootstrap'
import EventCard from '../Home/EventCard'
import { Event as EventType } from '../../context/EventType';

const transformEvents = (events: Array<any>) => {
    return events.map(event => ({
        id: event.id,
        title: event.title,
        start: event.startDate,
        classNames: getEventClassName(event.eventType),
        eventDate: event.date,
        ...event
    }));
};

// Funzione helper per mappare eventType a una classe CSS
const getEventClassName = (eventType: string): string => {
    return classNames("event", {
        'coderdojo-event': eventType === 'coderdojo',
        'coditec-event': eventType === 'coditec'
    });
}


const FullCalendarCustom: React.FC = () => {
    const { state } = useAppContext();
    const { event, ui } = state;
    const [selectedEvent, setSelectedEvent] = React.useState<EventType>();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleEventClick = (clickInfo: EventClickArg) => {
        const myOffcanvas = document.getElementById('EventOffcanvas');
        if (myOffcanvas) {

            const registration = clickInfo.event.extendedProps.registration;
            setIsOpen(registration?.isOpen || false && registration?.url || false);
            setSelectedEvent(clickInfo.event.extendedProps as EventType);

            const offcanvasInstance = new bootstrap.Offcanvas(myOffcanvas); // Crea un'istanza dell'Offcanvas
            offcanvasInstance.show(); // Apri l'Offcanvas
        }
    }

    const handleEvents = (events: EventApi[]) => {
        /*
        this.setState({
            currentEvents: events
        })
            */
    }



    // Uso della funzione con l'oggetto events
    const events = transformEvents(event.events || []);
    return (
        <>
            <section id="events_section" className="events section">
                <div className="container">
                    <div className='row'>
                        <div className="container section-title" data-aos="fade-up">
                            <h2>CALENDARIO</h2>
                            <p>PROSSIMI EVENTI</p>
                        </div>
                        <div className='codicec-calendar'>
                            <div className='coditec-calendar-main'>
                                <FullCalendar
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    headerToolbar={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        //right: 'dayGridMonth,timeGridWeek,timeGridDay'
                                        right: ''
                                    }}
                                    initialView='dayGridMonth'
                                    //editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    weekends={true}
                                    initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
                                    //select={this.handleDateSelect}
                                    eventContent={renderEventContent} // custom render function
                                    eventClick={handleEventClick}
                                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                                    /* you can update a remote database when these fire:
                                    eventAdd={function(){}}
                                    eventChange={function(){}}
                                    eventRemove={function(){}}
                                    */
                                    locale={'it'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OffCanvasCustom name="Evento" id="EventOffcanvas">
                {selectedEvent && (
                    <div key={event.id} className="col-md-12 d-flex align-items-stretch">
                        <EventCard
                            event={selectedEvent}
                            isOpen={isOpen}
                            uiData={ui}
                            showImage={false}
                        />
                    </div>
                )}
            </OffCanvasCustom >
        </>
    )
}


export default FullCalendarCustom;

function renderEventContent(eventContent: EventContentArg) {
    return (
        <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
        </>
    )
}

function renderSidebarEvent(event: EventApi) {
    return (
        <li key={event.id}>
            <b>{formatDate(event.start!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
            <i>{event.title}</i>
        </li>
    )
}