import React, { useState } from 'react';
import { Modal, View, ScrollView, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import { listaSustancias } from '../../data';
import SustanciaCard from '../../components/SustanciaCard';
import Carrusel from '../../components/Carrusel';
import { RouteProp } from '@react-navigation/native';
import { Sustancia } from '../../types/Sustancia';
import { RootStackParamList } from '../../navigation/AppNavigator';

type NewUserScreenRouteProp = RouteProp<RootStackParamList, 'NewUser'>;

interface NewUserScreenProps {
  route: NewUserScreenRouteProp;
  navigation: any; // Ajusta esto con el tipo adecuado si usas TypeScript con React Navigation
}

const NewUserScreen: React.FC<NewUserScreenProps> = ({ route, navigation }) => {
  const { eventName, eventId } = route.params;

  const [ciudad, setCiudad] = useState<string>('');
  const [localidad, setLocalidad] = useState<string>('');
  const [ocupacion, setOcupacion] = useState<string>('');
  const [nivelEducativo, setNivelEducativo] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [sexo, setSexo] = useState<string>('');

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [sustanciaActiva, setSustanciaActiva] = useState<string | null>(null);

  const [contadorSustancias, setContadorSustancias] = useState<number>(0);
  const [tuplasLib, setTuplasLib] = useState<Sustancia[]>([]);

  const [sustancias, setSustancias] = useState<string[]>([]);
  const [selectedSustancia, setSelectedSustancia] = useState<string>('placeholder');

  const handleSustanciaClick = (sustancia: string) => {
    setSustanciaActiva(sustancia);
    setModalVisible(true);
  };

  const handleAddSustancia = () => {
    if (selectedSustancia && selectedSustancia !== 'placeholder') {
      setSustancias((prev) => [...prev, selectedSustancia]);
      setTuplasLib((prev) => [...prev, 
        { 
          name: selectedSustancia, 
          id: contadorSustancias.toString(), 
          referencia: '' 
        }]);
      setContadorSustancias((prev) => prev + 1);
      setSelectedSustancia('placeholder');
    }
  };

  const handleSubmit = () => {
    console.log({
      tuplasLib,
      ciudad,
      localidad,
      ocupacion,
      nivelEducativo,
      genero,
      sexo,
    });
    navigation.navigate('DataInput', { eventName: eventName, eventId: eventId });
  };

  return (
    <ScrollView style={{ padding: 20, flex: 1 }}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Carrusel sustancia={sustanciaActiva} onClose={() => setModalVisible(false)} />
        </View>
      </Modal>

      {tuplasLib.map((tupla, index) => (
        <SustanciaCard
          key={tupla.id.toString()}
          sustancia={tupla}
          onClick={() => handleSustanciaClick(tupla.name)}
          onDelete={(id) => {
            const filteredTuplas = tuplasLib.filter((t) => t.id !== id);
            setTuplasLib(filteredTuplas);
            const filteredSustancias = sustancias.filter((_, idx) => idx !== index);
            setSustancias(filteredSustancias);
          }}
        />
      ))}

      <Picker style={[styles.input, { marginVertical: 10 }]} selectedValue={selectedSustancia} onValueChange={(itemValue) => setSelectedSustancia(itemValue.toString())}>
        <Picker.Item label="Sustancia" value="placeholder" />
        {listaSustancias.map((sustancia)=> (
                    <Picker.Item key={sustancia} label={sustancia} value={sustancia} />
                ))}
            </Picker>


            <Button title="Agregar nueva sustancia" onPress={handleAddSustancia} />
            
            <View style={{ height: 20 }} />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />

            <TextInput style={styles.input}
                placeholder="Ciudad"
                value={ciudad}
                onChangeText={setCiudad}
            />
            <TextInput style={styles.input}
                placeholder="Localidad (si aplica)"
                value={localidad}
                onChangeText={setLocalidad}
            />
            <TextInput style={styles.input}
                placeholder="Ocupación"
                value={ocupacion}
                onChangeText={setOcupacion}
            />
            <TextInput style={styles.input}
                placeholder="Nivel Educativo"
                value={nivelEducativo}
                onChangeText={setNivelEducativo}
            />
            <TextInput style={styles.input}
                placeholder="Género"
                value={genero}
                onChangeText={setGenero}
            />
            <TextInput style={styles.input}
                placeholder="Sexo"
                value={sexo}
                onChangeText={setSexo}
            />
            <View style={{ height: 20 }} />
            <Button title="Guardar" onPress={handleSubmit} />
            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

export default NewUserScreen;
