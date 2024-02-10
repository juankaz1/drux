import React, { useContext, useState } from 'react';
import { DatePickerAndroid, View, FlatList, Button, ImageBackground, TextInput } from 'react-native';
import CardEvent from '../../components/CardEvent';
import { EventsContext } from '../../contexts/EventsContext';
import styles from './styles';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Autocomplete from 'react-native-autocomplete-input';
import cities from 'cities.json';
import Carousel from 'react-native-snap-carousel';


const EventsScreen = ({ navigation }) => {
  // Suponiendo que los eventos tienen esta estructura:
  
  const { events, addEvent } = useContext(EventsContext);

  const [eventName, setEventName] = useState('');

  const newEventId = uuidv4();

  

  

  return (
    <View style={styles.container}>
      <ImageBackground 
        source = {require('../../../assets/chems.jpg')}
        style= {styles.image}>
      
      <TextInput
          value={eventName}
          onChangeText={text => setEventName(text)}
          placeholder="Nombre del evento"
          style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', margin: 10 }}
      />
      <Button
          title="Agregar Evento"
          onPress={() => {
              if (eventName.trim() === "") {
                  alert("Por favor, introduce un nombre para el evento.");
                  return;
              }

              const isEventNameTaken = events.some(event => event.name.toLowerCase() === eventName.toLowerCase());
              if (isEventNameTaken) {
                  alert("Ya existe un evento con ese nombre.");
                  return;
              }

              const currentDate = new Date();
              const createdDate = currentDate.toLocaleDateString();
              const createdTime = currentDate.toLocaleTimeString();
              
              addEvent({ 
                  id: newEventId, 
                  name: eventName, 
                  date: createdDate, 
                  time: createdTime 
              });
              setEventName('');
          }}
      />
      
      <FlatList 
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardEvent 
            id={item.id}
            title={item.name} 
            navigation={navigation}
            date={item.date}
            time={item.time}
          />
        )}
      />
      <Button 
        title="Botón de Prueba" 
        onPress={() => alert('Botón premsionado')} 
      />
      </ImageBackground>
    </View>
  );
};

export default EventsScreen;
