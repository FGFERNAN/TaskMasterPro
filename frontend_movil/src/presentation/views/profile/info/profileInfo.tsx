import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useEffect } from 'react'
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from "../../../../../App";
import useViewModel from './viewModel';
import Modal from 'react-native-modal';
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen = ({ navigation, route }: Props) => {
    const {
        users,
        id,
        nombre,
        apellidos,
        email,
        telefono,
        password,
        rolID,
        tipo_documento,
        searchId,
        selectedUserId,
        isModalVisible,
        searchedUser,
        setId,
        setNombre,
        setApellidos,
        setEmail,
        setTelefono,
        setPassword,
        setRolID,
        setTipo_documento,
        setSearchId,
        setSelectedUserId,
        toggleModal,
        handleAddUser,
        handleUpdateUser,
        handleDeleteUser,
        handleSearchUser,
        removeSession,
        fetchUsers
    } = useViewModel();
    useEffect(() => {
        if (route.params?.refresh) {
            fetchUsers();
            // Limpia el parámetro después de usarlo
            navigation.setParams({ refresh: undefined });
        }
    }, [route.params?.refresh]);
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonClose}
                    onPress={() => {
                        removeSession();
                        navigation.navigate('HomeScreen');
                    }}>
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Usarios</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Text style={styles.productText}>{item.id} - {item.nombre} {item.apellidos} - {item.email} - {item.rolID}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    navigation.navigate('ModifyScreen', {
                                        user: item // Pasamos el objeto de usuario completo
                                    });
                                }}
                            >
                                <Text style={styles.buttonText}>Modificar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDeleteUser(item.id)}>
                                <Text style={styles.buttonText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={styles.buttonContainer}>
            <TextInput
                style={styles.input}
                placeholder="Numero de ID"
                value={searchId}
                onChangeText={setSearchId}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearchUser}>
                {/* <Text style={styles.searchButtonText}>Buscar Usuario</Text> */}
                <FontAwesome name={"search"} size={15} color={"white"}/>
            </TouchableOpacity>
            </View>
            {searchedUser && (
                <View style={styles.productContainer}>
                    <Text style={styles.productText}> Usuario Buscado: {searchedUser.nombre} {searchedUser.apellidos}</Text>
                </View>
            )}
            <TouchableOpacity style={styles.addButton} onPress={() => {
                navigation.navigate('CreateScreen');
            }}>
                <Text style={styles.addButtonText}>Crear Usuario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportButton} onPress={toggleModal}>
                <Text style={styles.reportButtonText}>Generar Reporte</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Reporte de Usuarios</Text>
                    {users.map(user => (
                        <Text key={user.id} style={styles.modalText}>{user.id} - {user.nombre} {user.apellidos}</Text>
                    ))}
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
};
export default ProfileInfoScreen;