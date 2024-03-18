import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Alert, Button } from 'react-native';
import NewDataButton from '../../components/NewDataButton';
import EventsContext from '../../contexts/EventsContext';
import BackButton from '../../components/BackButton';
import styles from './styles';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useEvents } from '../../contexts/EventsContext';
import { RootStackParamList } from '../../navigation/AppNavigator';

// Definir los tipos para las props de navegación y parámetros de ruta si los tienes
type DataInputScreenRouteProp = RouteProp<RootStackParamList, 'DataInput'>;

type DataInputScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DataInput'>;



// Definir una interfaz para las props del componente
interface DataInputScreenProps {
  route: DataInputScreenRouteProp;
  navigation: DataInputScreenNavigationProp;
}

const DataInputScreen: React.FC<DataInputScreenProps> = ({ route, navigation }) => {
  const { deleteEvent } = useEvents();

  const { eventName, eventId } = route.params;

  const [dataInput, setDataInput] = useState('');

  const handleSubmit = () => {
    console.log('Dato ingresado:', dataInput);
    navigation.navigate('NewUser', { eventName: eventName, eventId: eventId });
  };

  return (
    <View style={styles.container}>
      <Text>Ingresar datos para el Evento {eventName}</Text>
      <TextInput style={styles.input} value={dataInput} onChangeText={setDataInput} placeholder="Ingresa el dato..." />
      <NewDataButton onPress={handleSubmit} />

      <BackButton onPress={() => navigation.goBack()} />
      <Button
        title="Eliminar Evento"
        color="red"
        onPress={() => {
          Alert.alert("Eliminar Evento", "¿Estás seguro de que quieres eliminar este evento?", [
            { text: "Cancelar", style: "cancel" },
            {
              text: "Eliminar",
              onPress: () => {
                deleteEvent(eventId);
                navigation.goBack();
              },
              style: "destructive",
            },
          ]);
        }}
      />
    </View>
  );
};

export default DataInputScreen;