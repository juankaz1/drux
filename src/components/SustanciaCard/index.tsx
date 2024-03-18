import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Sustancia } from '../../types/Sustancia';

// Definición de la interfaz para las props de tu componente
interface SustanciaCardProps {
    sustancia: Sustancia;
    onDelete: (id: string) => void; // onDelete es una función que espera un id de tipo string
    onClick: () => void; // onClick es una función que se ejecuta sin argumentos
  }


const SustanciaCard: React.FC<SustanciaCardProps> = ({ sustancia, onDelete, onClick }) => {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLongPress = () => {
        Alert.alert(
            "Eliminar Sustancia",
            `¿Deseas eliminar la sustancia: ${sustancia.name}?`,
            [
                {
                    text: "No",
                    style: "cancel"
                },
                { text: "Sí", onPress: () => onDelete(sustancia.id) }
            ]
        );
    };
    return (
        <TouchableOpacity 
        
        style={[styles.card, sustancia.referencia ? styles.green : styles.red]} 
        onLongPress={handleLongPress}
        onPress={onClick}
        >
            <Text>{sustancia.name}</Text>
        </TouchableOpacity>
    );

    
};

export default SustanciaCard;
