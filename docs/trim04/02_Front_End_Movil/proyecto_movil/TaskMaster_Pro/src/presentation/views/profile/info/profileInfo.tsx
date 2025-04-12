import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from "../../../../../App";
import useViewModel from './viewModel';
import Modal from 'react-native-modal';
import styles from "./styles";

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
        removeSession
    } = useViewModel();
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
                            <Text style={styles.productText}>{item.id} - {item.nombre} - {item.apellidos} - {item.email} - {item.telefono} - {item.password} - {item.rolID} - {item.tipo_documento}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    setId(item.id.toString());
                                    setNombre(item.nombre);
                                    setApellidos(item.apellidos);
                                    setEmail(item.email);
                                    setTelefono(item.telefono);
                                    setPassword(item.password);
                                    setRolID(item.rolID.toString());
                                    setTipo_documento(item.tipo_documento.toString());
                                    setSelectedUserId(item.id);
                                }}>
                                    <Text style={styles.buttonText}>Modificar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDeleteUser(item.id)}>
                                    <Text style={styles.buttonText}>Eliminar</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                />
            <TextInput
                style={styles.input}
                placeholder="ID"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellidos"
                value={apellidos}
                onChangeText={setApellidos}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefono"
                value={telefono}
                onChangeText={setTelefono}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Rol"
                value={rolID}
                onChangeText={setRolID}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo Documento"
                value={tipo_documento}
                onChangeText={setTipo_documento}
            />
            <TouchableOpacity style={styles.addButton} onPress={selectedUserId ? handleUpdateUser : handleAddUser}>
                <Text style={styles.addButtonText}>{selectedUserId ? "Modificar Usuario" : "Crear Usuario"}</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Numero de ID"
                value={searchId}
                onChangeText={setSearchId}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearchUser}>
                <Text style={styles.searchButtonText}>Buscar Usuario</Text>
            </TouchableOpacity>
            {searchedUser && (
                <View style={styles.productContainer}>
                    <Text style={styles.productText}> Usuario Buscado: {searchedUser.nombre} - {searchedUser.apellidos}</Text>
                </View>
            )}
            <TouchableOpacity style={styles.reportButton} onPress={toggleModal}>
                <Text style={styles.reportButtonText}>Generar Reporte</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Reporte de Usuarios</Text>
                    {users.map(user => (
                        <Text key={user.id} style={styles.modalText}>{user.nombre} - {user.apellidos}</Text>
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