import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { diccionarioColores } from '../../data';

const traduccionColores = {
  'BLANCO': '#FFFFFF',
  'GRIS': '#808080',
  'AMARILLO': '#FFFF00',
  'ROSADO': '#FFC0CB',
  'AZUL': '#0000FF',
  'MORADO': '#800080',
  'DORADO': '#FFD700',
  'NARANJA': '#FFA500',
  'VERDE': '#008000',
  'ROJO': '#FF0000',
  'NEGRO': '#000000',
  'BEIGE': '#F5F5DC',
  'MARRON': '#A52A2A',
  'OTRO': '#C0C0C0' 
};

const SeleccionColor = () => {
  const [colorSeleccionado, setColorSeleccionado] = useState(null);

  const handlePress = (color) => {
    setColorSeleccionado(color);
  };

  const renderItem = ({ item: color }) => (
    <TouchableOpacity 
      style={[styles.colorBox, {backgroundColor: traduccionColores[color]}]}
      onPress={() => handlePress(color)}
    />
  );

  return (
    <View style={styles.container}>
      {colorSeleccionado && (
        <Text style={styles.selectedColorText}>Color seleccionado: {colorSeleccionado}</Text>
      )}

      <FlatList
        data={diccionarioColores}
        renderItem={renderItem}
        keyExtractor={(color) => color}
        numColumns={3}
        contentContainerStyle={styles.colorsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,  
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#FFF',
    },
    colorsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    colorBox: {
      width: 80,
      height: 80,
      margin: 5
    },
    selectedColorText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000'  
    }
});

export default SeleccionColor;
