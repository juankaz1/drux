// EventsContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Event } from '../types/Events'; // Asegúrate de que la ruta sea correcta

interface EventsContextType {
  events: Event[];
  addEvent: (newEvent: Event) => void;
  deleteEvent: (eventId: string) => void; 
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

interface EventsProviderProps {
  children: React.ReactNode;
}

export const EventsProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (newEvent: Event) => {
    setEvents((currentEvents) => [...currentEvents, newEvent]);
  };

  const deleteEvent = (eventId: string) => {
    setEvents((currentEvents) => currentEvents.filter(event => event.id !== eventId));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error('useEvents debe usarse dentro de un EventsProvider');
  }
  return context;
};

export default EventsContext;