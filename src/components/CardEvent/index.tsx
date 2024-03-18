// src/components/CardEvent/index.tsx

import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from './styles';

// Define la interfaz para las props del componente
interface CardEventProps {
  id: string;
  title: string;
  navigation: NavigationProp<ParamListBase>;
  date: string;
  time: string;
  city: string;
  eventDate: string;
}

// Aplica la interfaz al componente usando React.FC (Function Component) de TypeScript
const CardEvent: React.FC<CardEventProps> = ({ id, title, navigation, date, time, city, eventDate }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => {
        alert(`Nombre del Evento: ${title}\nFecha de Creación: ${date} ${time}\nCiudad: ${city}\nFecha del Evento: ${eventDate}`);
        navigation.navigate('DataInput', { eventName: title, eventId: id });
      }}
    >
      <Text>{title}</Text>
      <Text>Ciudad: {city}</Text>
      <Text>Fecha: {eventDate}</Text>
    </TouchableOpacity>
  );
};

export default CardEvent;
