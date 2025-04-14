import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Props {
    image: any;
    placeholder: string;
    value: number;
    property: string;
    onChangeValue: (property: string, value: number) => void;
    options: Array<{ label: string; value: number }>;
}

export const CustomPickerSelect = ({
    image,
    placeholder,
    value,
    property,
    onChangeValue,
    options
}: Props) => {
    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon} source={image} />
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
        width: 25,
        height: 25,
        margin: 30,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
    },
    pickerContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        marginLeft: 15,
    },
    picker: {
        width: '100%',
    },
});