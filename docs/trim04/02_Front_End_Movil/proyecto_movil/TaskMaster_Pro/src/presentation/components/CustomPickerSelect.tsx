import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    icon: any;
    size: number;
    color: string;
    placeholder: string;
    value: number;
    property: string;
    onChangeValue: (property: string, value: number) => void;
    options: Array<{ label: string; value: number }>;
}

export const CustomPickerSelect = ({
    icon,
    size,
    color,
    placeholder,
    value,
    property,
    onChangeValue,
    options
}: Props) => {
    return (
        <View style={styles.formInput}>
            <FontAwesome style={styles.formIcon} name={icon} size={size} color={color}/>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) => onChangeValue(property, Number(itemValue))}
                    style={styles.picker}
                    dropdownIconColor="#000"
                >
                    <Picker.Item label={placeholder} value={0} />
                    {options.map((option) => (
                        <Picker.Item
                            key={option.value}
                            label={option.label}
                            value={option.value}
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formIcon: {
        marginRight: 15,
        marginTop: 15
      },
      formInput: {
        flexDirection: 'row',
        marginTop: 40,
      },
    pickerContainer: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#2E7060',
        marginLeft: 5,
    },
    picker: {
        width: '100%',
    },
});