// EventsScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, Button, ImageBackground, TextInput, Alert, ImageBackgroundProps } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useEvents } from '../../contexts/EventsContext'; // Asegúrate de que la ruta sea correcta
import CardEvent from '../../components/CardEvent';
import styles from './styles';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { RootStackParamList } from '../../navigation/AppNavigator';

type EventsScreenNavigationProp = NavigationProp<RootStackParamList, 'Events'>;



interface EventsScreenProps {
  navigation: EventsScreenNavigationProp;
}

const EventsScreen: React.FC<EventsScreenProps> = ({ navigation }) => {
  const { events, addEvent } = useEvents();
  const [eventName, setEventName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');


  const handleAddEvent = () => {
    if (!eventName.trim()) {
      Alert.alert("Por favor, introduce un nombre para el evento.");
      return;
    }
    
    if (!city.trim()) {
      Alert.alert("Por favor, introduce la ciudad donde será el evento.");
      return;
    }

    if (!eventDate.trim()) {
      Alert.alert("Por favor, introduce la fecha del evento.");
      return;
    }

    const isEventNameTaken = events.some(event => event.name.toLowerCase() === eventName.toLowerCase());
    if (isEventNameTaken) {
      Alert.alert("Ya existe un evento con ese nombre.");
      return;
    }

    const currentDate = new Date();
    const createdDate = currentDate.toLocaleDateString();
    const createdTime = currentDate.toLocaleTimeString();


    const newEvent = {
      id: uuidv4(),
      name: eventName,
      date: createdDate,
      time: createdTime,
      city: city,
      eventDate: eventDate,
    };

    addEvent(newEvent);
    setEventName('');
    setCity('');
    setEventDate('');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/chems.jpg')}
        style={styles.image as any}
      >
        <TextInput
          value={eventName}
          onChangeText={setEventName}
          placeholder="Nombre del evento"
          style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', margin: 10 }}
        />
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="Ciudad del evento"
          style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', margin: 10 }}
        />
        <TextInput
          value={eventDate}
          onChangeText={setEventDate}
          placeholder="Fecha del evento (dd/mm/aaaa)"
          style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', margin: 10 }}
        />
        <Button title="Agregar Evento" onPress={handleAddEvent} />
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
              city={item.city} 
              eventDate={item.eventDate}
            />
          )}
        />
        <Button title="Botón de Prueba" onPress={() => Alert.alert('Botón presionado')} />
      </ImageBackground>
    </View>
  );
};

export default EventsScreen;