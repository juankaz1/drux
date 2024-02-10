import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const SustanciaCard = ({ sustancia, onDelete, onClick }) => {
    const navigation = useNavigation();
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
