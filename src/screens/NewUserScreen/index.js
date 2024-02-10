import React, { useState } from 'react';
import { Modal, View, ScrollView, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import { listaSustancias } from '../../data'; 
import SustanciaCard from '../../components/SustanciaCard';
import Carrusel from '../../components/Carrusel';

const NewUserScreen = ({ route, navigation }) => {
    const { eventName, eventId } = route.params;
    
    const [ciudad, setCiudad] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [nivelEducativo, setNivelEducativo] = useState('');
    const [genero, setGenero] = useState('');
    const [sexo, setSexo] = useState('');

    
    const [modalVisible, setModalVisible] = useState(false);
    const [sustanciaActiva, setSustanciaActiva] = useState(null);
    
    const handleSustanciaClick = (sustancia) => {
        setSustanciaActiva(sustancia);
        setModalVisible(true);
    }
    



    const [contadorSustancias, setContadorSustancias] = useState(0);
    const [tuplasLib, setTuplasLib] = useState([]);
    
    const [sustancias, setSustancias] = useState([]);

    const [selectedSustancia, setSelectedSustancia] = useState('placeholder');

    const handleAddSustancia = () => {
        if (selectedSustancia && selectedSustancia !== 'placeholder' ) {
            setSustancias(prev => [ ...prev, selectedSustancia]);
            setTuplasLib(prev => [ ...prev, {name: selectedSustancia, id: contadorSustancias, referencia: ''} ]);
            setContadorSustancias(prev => prev +1);
            setSelectedSustancia('placeholder'); // Esto establecerá el Picker de nuevo al placeholder
        }
    };
    

    // Función para manejar la entrada de datos y posteriormente guardarla (a un servidor, base de datos local, etc.)
    const handleSubmit = () => {
        // Aquí podrías hacer algo con los datos
        console.log({
            tuplasLib,
            ciudad,
            localidad,
            ocupacion,
            nivelEducativo,
            genero,
            sexo
        });

        // Si necesitas navegar a otra pantalla o hacer otra acción después de guardar los datos
        navigation.navigate('DataInput', { eventName: eventName, eventId: eventId });
    };
    React.useEffect(() => {
        navigation.setOptions({
            title: eventName
        });
    }, [eventName]);

    return (
        <ScrollView style={{ padding: 20, flex: 1 }}>
        
        
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Carrusel 
                        sustancia={sustanciaActiva} 
                        onClose={() => setModalVisible(false)} 
                    />
                </View>
            </Modal>
            
            

        {tuplasLib.map((tupla, index) => (
            <SustanciaCard
                key={tupla.id} // Utilizamos el id de la tupla como key
                sustancia={tupla} // Enviamos la tupla completa como la propiedad sustancia
                index={index}
                onClick={() => handleSustanciaClick(tupla)}
                onDelete={(id) => { // Ahora onDelete espera recibir un id
                    const filteredTuplas = tuplasLib.filter(t => t.id !== id);
                    setTuplasLib(filteredTuplas);

                    // También debes actualizar la lista de sustancias para que se mantengan sincronizadas
                    const filteredSustancias = sustancias.filter((s, idx) => idx !== index);
                    setSustancias(filteredSustancias);
                }}
                
            />
        ))}




            <Picker
                style={[styles.input, { marginVertical: 10 }]}
                placeholder="Sustancia"
                selectedValue={selectedSustancia}
                onValueChange={(itemValue) => setSelectedSustancia(itemValue)}
            >
                <Picker.Item label="Sustancia" value="placeholder" />
                {listaSustancias.map((sustancia) => (
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
