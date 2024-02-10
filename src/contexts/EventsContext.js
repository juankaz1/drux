import React, { createContext, useState } from 'react';

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
    
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        setEvents(prevEvents => [event, ...prevEvents]);
    };

    const deleteEvent = (eventId) => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
    };

    return (
        <EventsContext.Provider value={{ events, addEvent, deleteEvent }}>
            {children}
        </EventsContext.Provider>
    );
};
