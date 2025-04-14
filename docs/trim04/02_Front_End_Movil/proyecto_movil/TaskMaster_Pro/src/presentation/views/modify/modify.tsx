import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { useModifyViewModel } from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { CustomPickerSelect } from '../../components/CustomPickerSelect';
import { CustomNumberInput } from '../../components/CustomNumberInput';
import styles from './styles'

interface Props extends StackScreenProps<RootStackParamList, 'ModifyScreen'> { };
export const ModifyScreen = ({ navigation, route }: Props) => {
    const { user } = route.params
    const { nombre, apellidos, email, telefono, rolID, tipo_documento, onChange, handleUpdateUser, errorMessage, loading } = useModifyViewModel(user?.id);
    const handleSubmit = async () => {
        const success = await handleUpdateUser();
        if (success) {
            navigation.navigate({
                name: "ProfileInfoScreen",
                params: { refresh: true }, // o simplemente {} si no pasas nada
            });
        }
    };
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
        if (user) {
            onChange('nombre', user.nombre);
            onChange('apellidos', user.apellidos);
            onChange('email', user.email);
            onChange('telefono', user.telefono || '');
            onChange('rolID', user.rolID.toString());
            onChange('tipo_documento', user.tipo_documento.toString());
        }
    }, [user]);

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.ImageBackground}

            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>


            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>MODIFICAR USUARIO</Text>


                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='Nombres'
                        keyboardType='default'
                        property='nombre'
                        onChangeText={onChange}
                        value={nombre}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/my_user.png')}
                        placeholder='Apellidos'
                        keyboardType='default'
                        property='apellidos'
                        onChangeText={onChange}
                        value={apellidos}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/email.png')}
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        property='email'
                        onChangeText={onChange}
                        value={email}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/phone.png')}
                        placeholder='Telefono'
                        keyboardType='numeric'
                        property='telefono'
                        onChangeText={onChange}
                        value={telefono}
                    />

                    <CustomPickerSelect
                        image={require('../../../../assets/document.png')}
                        placeholder="Tipo Documento"
                        value={tipo_documento}
                        property="tipo_documento"
                        onChangeValue={onChange}
                        options={documentTypes}
                    />


                    <CustomPickerSelect
                        image={require('../../../../assets/user.png')}
                        placeholder="Rol"
                        value={rolID}
                        property="rolID"
                        onChangeValue={onChange}
                        options={rolTypes}
                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton
                            text={loading ? 'ACTUALIZANDO...' : 'CONFIRMAR'}
                            onPress={handleSubmit}
                            disabled={loading}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

