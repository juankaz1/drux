import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const NewDataButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Ingresar Nuevos Datos</Text>
    </TouchableOpacity>
  );
};

export default NewDataButton;

