// CustomNumberInput.tsx
import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

interface Props {
    image: any;
    placeholder: string;
    value: number; // Recibimos number como prop
    property: string;
    maxLength?: number;
    onChangeText: (property: string, value: number) => void; // Devolvemos number
}

export const CustomNumberInput = ({
    image,
    placeholder,
    value,
    property,
    maxLength,
    onChangeText
}: Props) => {
    // Convertimos el número a string para el TextInput
    const stringValue = value.toString();

    const handleChange = (text: string) => {
        // Filtramos solo dígitos
        const numericText = text.replace(/[^\d]/g, '');
        
        // Convertimos a número solo si no está vacío
        const numericValue = numericText === '' ? 0 : parseInt(numericText, 10);
        
        // Pasamos el número al padre
        onChangeText(property, numericValue);
    };

    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon} source={image} />
            <TextInput
                style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType="number-pad"
                value={stringValue} // Usamos el string convertido
                onChangeText={handleChange}
                maxLength={maxLength}
            />
        </View>
    );
};

// Estilos (igual que antes)
const styles = StyleSheet.create({
    formIcon: { width: 25, height: 25, margin: 30 },
    formInput: { flexDirection: 'row', marginTop: 30 },
    formTextInput: { flex: 1, borderBottomWidth: 1, borderBottomColor: 'orange', marginLeft: 15 }
});