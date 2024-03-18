import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
// Importación del diccionario de referencias
import { diccionarioReferencias } from '../../data';

// Define la interfaz para las props del componente
interface CarruselReferenciaProps {
    substance: string;
  }


const CarruselReferencia: React.FC<CarruselReferenciaProps> = ({ substance }) => {
    // Estados
    const [allReferences, setAllReferences] = useState<string[]>([]);
    const [filteredReferences, setFilteredReferences] = useState<string[]>([]);
    const [searchText, setSearchText] = useState('');
    const [selectedReference, setSelectedReference] = useState('');

    useEffect(() => {
        // Se utilizan las referencias del diccionario importado
        const initialReferences = diccionarioReferencias;

        setAllReferences(initialReferences[substance] || []);
        setFilteredReferences(initialReferences[substance] || []);
    }, [substance]);

    const handleAddAndSelectReference = () => {
        if (searchText && !allReferences.includes(searchText)) {
            setAllReferences(prev => [...prev, searchText]);
            setFilteredReferences(prev => [...prev, searchText]);
        }
        setSelectedReference(searchText);
        console.log("Referencia seleccionada:", searchText);
    };

    const handleSelectReference = (reference: string) => {
        setSelectedReference(reference);
        console.log("Referencia seleccionada:", reference);
    };

    const handleFilter = (text: string) => {
        setSearchText(text);
        setFilteredReferences(allReferences.filter(ref => ref.includes(text)));
    };

    const handleRemoveSelectedReference = () => {
        setSelectedReference('');
    };

    const clearSearchText = () => {
        setSearchText('');
        setFilteredReferences(allReferences);
    };

    return (
        <View>
            <Text>Referencia para {substance}: </Text>
            <Text 
            style={ {  color: selectedReference ? 'blue' : 'grey' }}>
            
                {selectedReference || 'Sin referencia'}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    value={searchText}
                    onChangeText={handleFilter}
                    placeholder="Buscar referencia"
                    style={ styles.input }
                />
                {searchText !== '' && (
                    <TouchableOpacity onPress={clearSearchText}>
                        <Text style={{ marginLeft: 5 }}>X</Text>
                    </TouchableOpacity>
                )}
            </View>
            
            <Button title="Agregar referencia" onPress={handleAddAndSelectReference} />
            <Button title="Eliminar referencia" onPress={handleRemoveSelectedReference} />
            
            <View style={{ height: 1 }} />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />

            <FlatList
                data={filteredReferences}
                renderItem={({ item }) => (
                    <Button title={item} onPress={() => handleSelectReference(item)} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            
            
        </View>
    );
};

export default CarruselReferencia;
