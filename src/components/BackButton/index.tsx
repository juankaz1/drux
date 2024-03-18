import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';


// Extiende las props estándar de TouchableOpacity con cualquier prop adicional
interface BackButtonProps extends TouchableOpacityProps {
  onPress: () => void; // Define el tipo de la función onPress
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Atrás</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
