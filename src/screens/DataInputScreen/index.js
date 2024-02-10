import React, { useContext } from 'react';
import { View, Text, TextInput, Alert, Button } from 'react-native';
import NewDataButton from '../../components/NewDataButton';
import { EventsContext } from '../../contexts/EventsContext';
import BackButton from '../../components/BackButton';
import styles from './styles';

const DataInputScreen = ({ route, navigation }) => {

  const { deleteEvent } = useContext(EventsContext);

  const { eventName, eventId } = route.params;
  
  // Aquí puedes agregar más campos según lo necesites
  const [dataInput, setDataInput] = React.useState('');

  const handleSubmit = () => {
    // Aquí iría el código para enviar el dato al archivo de Excel o base de datos.
    console.log('Dato ingresado:', dataInput);

    // Regresar a la pantalla anterior tras ingresar el dato
    navigation.navigate('NewUser', { eventName: eventName, eventId: eventId });
    
  };

  return (
    <View style={styles.container}>
      <Text>Ingresar datos para el Evento {eventName}</Text>
      <TextInput 
        style={styles.input} 
        value={dataInput} 
        onChangeText={setDataInput} 
        placeholder="Ingresa el dato..."
      />
      <NewDataButton onPress={handleSubmit} />

      <BackButton onPress={() => navigation.goBack()} />
      <Button
          title="Eliminar Evento"
          color="red"
          onPress={() => {
            console.log('Dato ingresado:', route.params);
              Alert.alert(
                  "Eliminar Evento",
                  "¿Estás seguro de que quieres eliminar este evento?",
                  [
                      {
                          text: "Cancelar",
                          style: "cancel"
                      },
                      {
                          text: "Eliminar", 
                          onPress: () => {
                              deleteEvent(eventId); // Aquí asumo que tienes acceso al ID del evento actual en alguna variable llamada eventId
                              navigation.goBack(); // Regresar a la pantalla anterior después de eliminar
                          },
                          style: "destructive"
                      }
                  ]
              );
          }}
      />
    </View>
  );
};

export default DataInputScreen;
