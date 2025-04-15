import React from 'react'
import { TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { MyColors } from '../theme/appTheme';

interface Props{
    text: string;
    onPress: () => void;
    disabled?: boolean;
}

export const RoundedButton = ({text, onPress, disabled = false }:Props) => {
  return (
    <TouchableOpacity
    style={[styles.RoundedButton, disabled && styles.disabledButton]}
    onPress={() => onPress()}
    disabled={disabled}
    >
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    RoundedButton:{
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    textButton:{
        color: 'white',
        fontWeight: 'bold'
    },
    disabledButton: {
        backgroundColor: '#CCCCCC', // Color cuando está deshabilitado
        opacity: 0.6
      },
})
