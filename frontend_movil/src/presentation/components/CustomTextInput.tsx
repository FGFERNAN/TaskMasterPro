import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  icon: any;
  size: number;
  color: string;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string,
  onChangeText: (property: string, value: any) => void,
}

export const CustomTextInput = ({
  icon,
  size,
  color,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
      <FontAwesome style={styles.formIcon} name={icon} size={size} color={color}/>
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formIcon: {
    marginRight: 12,
    marginTop: 10
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
})