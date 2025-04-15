// CustomNumberInput.tsx
import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    icon: any;
    size: number;
    color: string;
    placeholder: string;
    value: number; // Recibimos number como prop
    property: string;
    maxLength?: number;
    onChangeText: (property: string, value: number) => void; // Devolvemos number
}

export const CustomNumberInput = ({
    icon,
    size,
    color,
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
            <FontAwesome style={styles.formIcon} name={icon} size={size} color={color} />
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
    formIcon: {
        marginRight: 15,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 40,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#2E7060',
        marginLeft: 5,
    }
});