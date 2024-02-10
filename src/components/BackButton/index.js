import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Atrás</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
