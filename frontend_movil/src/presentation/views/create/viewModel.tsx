import React, { useState } from 'react'
import { ApiDelivery } from '../../../data/source/remote/api/ApiDelivery';
import { CreateAuthUseCase } from '../../../domain/useCases/auth/CreateAuth';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; //

const CreateViewModel = () => {
  const navigation = useNavigation<any>();
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    password: '',
    rolID: 0,
    tipo_documento: 0
  });
  const handleNumberChange = (property: string, value: number) => {
    setValues(prev => ({
      ...prev,
      [property]: value
    }));
  };
  const onChange = (property: string, value: string | number) => {
    if (property === 'tipo_documento' || "rolID") {
      setValues(prev => ({ ...prev, [property]: Number(value) }));
    } else {
      setValues(prev => ({ ...prev, [property]: value }));
    }
    setValues({ ...values, [property]: (value) });
  }
  const create = async () => {
    try {
      if (!isValidForm()) {
        const response = await CreateAuthUseCase(values);
        console.log('Result ' + JSON.stringify(response));
        Toast.show({
          type: 'success',
          text1: 'Usuario creado',
          text2: 'Redirigiendo al inicio...',
          visibilityTime: 2000, // 2 segundos
          onHide: () => navigation.navigate('ProfileInfoScreen' as never) // Redirige después
        });
      }

    } catch (error) {
      console.log('Error ' + error);
    }
  }
  const isValidForm = (): boolean => {
    if (values.nombre === '') {
      setErrorMessage('El nombre es requerido');
      return true;
    }
    if (values.apellidos === '') {
      setErrorMessage('Los apellidos son requeridos');
      return true;
    }
    if (values.email === '') {
      setErrorMessage('El email es requerido');
      return true;
    }
    if (values.tipo_documento === 0) {
      setErrorMessage('El tipo de documento es requerido');
      return true;
    }
    if (values.id === 0) {
      setErrorMessage('El numero de documento es requerido');
      return true;
    }
    if (values.password === '') {
      setErrorMessage('La contraseña es requerida');
      return true;
    }
    if (values.rolID === 0) {
      setErrorMessage('El rol es requerido');
      return true
    }

    return false;

  }
  return {
    ...values,
    onChange,
    create,
    handleNumberChange,
    errorMessage
  }

}

export default CreateViewModel;