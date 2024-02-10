// src/components/CardEvent/index.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';

const CardEvent = ({ id, title, navigation, date, time, city, eventDate }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => {
        alert(`Nombre del Evento: ${title}\nFecha de Creación: ${date} ${time}\nCiudad: ${city}\nFecha del Evento: ${eventDate}`);
        navigation.navigate('DataInput', { eventName: title, eventId: id })
      }}
    >
      <Text>{title}</Text>
      <Text>Ciudad: {city}</Text>
      <Text>Fecha: {eventDate}</Text>
    </TouchableOpacity>
  );
};



export default CardEvent;
