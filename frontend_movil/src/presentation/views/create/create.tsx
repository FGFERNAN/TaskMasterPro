import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { CustomPickerSelect } from '../../components/CustomPickerSelect';
import { CustomNumberInput } from '../../components/CustomNumberInput';
import styles from './styles'

export const CreateScreen = () => {
    const { id, nombre, apellidos, email, telefono, password, rolID, tipo_documento, onChange, create, handleNumberChange, errorMessage } = useViewModel();
    // Para saber si la variable ya tiene establecido un valor 
    const documentTypes = [
        { label: 'Tarjeta de Identidad', value: 1 },
        { label: 'Cédula de Ciudadanía', value: 2 },
        { label: 'Cédula de Extranjeria', value: 3 },
        // ... otras opciones
    ];
    const rolTypes = [
        { label: 'Administrador', value: 1 },
        { label: 'Lider de Proyecto', value: 2 },
        { label: 'Miembro de Proyecto', value: 3 },
        { label: 'Cliente/StakeHolder', value: 4 },
        // ... otras opciones
    ];

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage]);

    return (
        <View style={styles.container}>
            {/* <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.ImageBackground}
            /> */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImage}
                />
                {/* <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text> */}
            </View>


            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>CREAR USUARIO</Text>
                    <CustomTextInput
                        icon="user-circle"
                        size={25}
                        color='#2E7060'
                        placeholder='Nombres'
                        keyboardType='default'
                        property='nombre'
                        onChangeText={onChange}
                        value={nombre}
                    />

                    <CustomTextInput
                        icon="user-circle-o"
                        size={25}
                        color='#2E7060'
                        placeholder='Apellidos'
                        keyboardType='default'
                        property='apellidos'
                        onChangeText={onChange}
                        value={apellidos}
                    />

                    <CustomTextInput
                        icon="envelope"
                        size={22}
                        color='#2E7060'
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        property='email'
                        onChangeText={onChange}
                        value={email}
                    />
                    <CustomTextInput
                        icon="phone"
                        size={25}
                        color='#2E7060'
                        placeholder='Telefono'
                        keyboardType='numeric'
                        property='telefono'
                        onChangeText={onChange}
                        value={telefono}
                    />

                    <CustomPickerSelect
                        icon="id-card-o"
                        size={22}
                        color='#2E7060'
                        placeholder="Tipo Documento"
                        value={tipo_documento}
                        property="tipo_documento"
                        onChangeValue={onChange}
                        options={documentTypes}
                    />

                    <CustomNumberInput
                        icon="id-badge"
                        size={24}
                        color='#2E7060'
                        placeholder="Número de documento"
                        value={id}
                        property="id"
                        onChangeText={handleNumberChange}
                        maxLength={10}
                    />

                    <CustomTextInput
                        icon="lock"
                        size={27}
                        color='#2E7060'
                        placeholder='Contraseña'
                        keyboardType='default'
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />

                    <CustomPickerSelect
                        icon="user"
                        size={25}
                        color='#2E7060'
                        placeholder="Rol"
                        value={rolID}
                        property="rolID"
                        onChangeValue={onChange}
                        options={rolTypes}
                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR' onPress={() => create()}></RoundedButton>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

