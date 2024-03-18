import React, { useRef } from 'react';
import { View, Button, Text, TextInput, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarruselReferencia from '../ReferenciaCarrusel';
import SeleccionColor from '../Colors';

const { width: viewportWidth } = Dimensions.get('window');

interface CarruselProps {
    sustancia: {
        name: string;
    };
    onClose: () => void;
}

const Carrusel: React.FC<CarruselProps> = ({ sustancia, onClose }) => {
    const carouselRef = useRef(null);

    // Renderiza cada elemento del carrusel
    const renderItem = ({item, index}: { item: any; index: number }) => {
        switch(index) {
            case 0:
                return <CarruselReferencia substance={sustancia.name} />;
            case 1:
                return <SeleccionColor />;
            case 2:
                return <TextInput placeholder="Precio por unidad" keyboardType="numeric" />;
            default:
                return <View />;
        }
    };

    return (
        <View style={{ width: '88%', height: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{sustancia.name}</Text>
            <Carousel
                ref={carouselRef}
                data={[{}, {}, {}]} // Array con un objeto para cada pantalla del carrusel
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth - 60}
                loop={false}
            />
            <Button title="Guardar" onPress={onClose} />
        </View>
    );
};

export default Carrusel;
