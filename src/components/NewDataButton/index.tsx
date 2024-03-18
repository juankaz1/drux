import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import styles from './styles';


// Define la interfaz para las props del componente
interface NewDataButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const NewDataButton: React.FC<NewDataButtonProps>  = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Ingresar Nuevos Datos</Text>
    </TouchableOpacity>
  );
};

export default NewDataButton;

