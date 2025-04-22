import React from 'react'
import { useState, useEffect } from 'react';
import { updateUser, getUserById } from '../../../../src/data/source/remote/api/ApiDelivery';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; //

interface User {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    telefono?: string;
    rolID: number;
    tipo_documento: number;
}

export const useModifyViewModel = (userId?: number) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        rolID: 0,
        tipo_documento: 0
    });

    // Cargar datos del usuario al montar el componente
    useEffect(() => {
        if (userId) {
            fetchUserData(userId);
        }
    }, [userId]);

    const fetchUserData = async (id: number) => {
        try {
            setLoading(true);
            const userData = await getUserById(id);
            if (userData) {
                setFormValues({
                    nombre: userData.nombre,
                    apellidos: userData.apellidos,
                    email: userData.email,
                    telefono: userData.telefono || '',
                    rolID: userData.rolID,
                    tipo_documento: userData.tipo_documento
                });
            }
        } catch (error) {
            setErrorMessage('Error al cargar datos del usuario');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (property: string, value: string | number) => {
        // Convertir a número si es rolID o tipo_documento
        const numericFields = ['rolID', 'tipo_documento'];
        const processedValue = numericFields.includes(property) ? Number(value) : value;

        setFormValues(prev => ({
            ...prev,
            [property]: processedValue
        }));
    };

    const handleUpdate = async () => {
        try {
            if (!userId) throw new Error('ID de usuario no definido');

            if (isValidForm()) {
                setLoading(true);
                setErrorMessage('');

                const updatedData = {
                    nombre: formValues.nombre,
                    apellidos: formValues.apellidos,
                    email: formValues.email,
                    telefono: formValues.telefono,
                    rolID: formValues.rolID,
                    tipo_documento: formValues.tipo_documento
                };

                const updatedUser = await updateUser(userId, updatedData);
                // Verificación adicional de la respuesta
                if (!updatedUser) {
                    throw new Error('No se recibió respuesta del servidor');
                }

                Toast.show({
                    type: 'success',
                    text1: 'Usuario actualizado',
                    text2: 'Los cambios se guardaron correctamente',
                    visibilityTime: 2000,
                    onHide: () => navigation.navigate('ProfileInfoScreen', {
                        refresh: true
                    } as never)
                });

                return true;
            }
        } catch (error) {
            let errorMessage = 'Error al actualizar usuario';

            // Verificación de tipo segura
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === 'string') {
                errorMessage = error;
            }

            console.error('Error al actualizar:', error);
            setErrorMessage(errorMessage);

            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: errorMessage
            });

            return false;
        } finally {
            setLoading(false);
        }
    };

    const isValidForm = (): boolean => {
        if (formValues.nombre.trim() === '') {
            setErrorMessage('El nombre es requerido');
            return false;
        }
        if (formValues.apellidos.trim() === '') {
            setErrorMessage('Los apellidos son requeridos');
            return false;
        }
        if (formValues.email.trim() === '') {
            setErrorMessage('El email es requerido');
            return false;
        }
        if (formValues.rolID === 0) {
            setErrorMessage('El rol es requerido');
            return false;
        }
        if (formValues.tipo_documento === 0) {
            setErrorMessage('El tipo de documento es requerido');
            return false;
        }
        return true;
    };

    return {
        ...formValues,
        loading,
        errorMessage,
        onChange: handleChange,
        handleUpdateUser: handleUpdate,
        handleNumberChange: (property: string, value: number) => handleChange(property, value)
    };
};