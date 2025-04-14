import React from 'react'
import { useState, useEffect } from 'react';
import { getUser, getUserById, updateUser, deleteUser, createUser } from '../../../../data/source/remote/api/ApiDelivery';
import { RemoveUserLocalUseCase } from "../../../../domain/useCases/userLocal/removeUserLocal";

interface User {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    password: string;
    rolID: number;
    tipo_documento: number;
}

const ProfileInfoViewModel = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [rolID, setRolID] = useState(0);
    const [tipo_documento, setTipo_documento] = useState(0);
    const [searchId, setSearchId] = useState('')
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchedUser, setSearchedUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUsers();;
    }, []);

    const fetchUsers = async () => {
        const data = await getUser();
        setUsers(data);
    };

    const handleAddUser = async () => {
        const newUser = await createUser({ id, nombre, apellidos, email, telefono, password, rolID, tipo_documento });
        setUsers([...users, newUser]);
        setId('');
        setNombre('');
        setApellidos('');
        setEmail('');
        setTelefono('');
        setPassword('');
        setRolID(0);
        setTipo_documento(0);
    };

    const handleUpdateUser = async () => {
        if (selectedUserId !== null) {
            const updatedUser = await updateUser(selectedUserId, { nombre, apellidos, email, telefono, rolID, tipo_documento });
            setUsers(users.map(user => user.id === selectedUserId ? updatedUser : user));
            setSelectedUserId(null);
            setNombre('');
            setApellidos('');
            setEmail('');
            setTelefono('');
            setRolID(0);
            setTipo_documento(0);
        }
    };


    const handleDeleteUser = async (id: number) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    };

    const handleSearchUser = async () => {
        const users = await getUserById(parseInt(searchId));
        setSearchedUser(users);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const removeSession = async () => {
        await RemoveUserLocalUseCase();
    }
    return {
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
    }
}


export default ProfileInfoViewModel;
