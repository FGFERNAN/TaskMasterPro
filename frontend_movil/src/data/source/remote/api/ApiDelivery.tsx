import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.80.15:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getUser = async () => {
    const response = await ApiDelivery.get('/users');
    return response.data.data;
};

export const getUserById = async (id) => {
    const response = await ApiDelivery.get(`/users/${id}`);
    return response.data.data;
};

export const createUser = async (user) => {
    const response = await ApiDelivery.post('/users', user);
    return response.data.data;
};

export const updateUser = async (id, user) => {
    const response = await ApiDelivery.put(`/users/${id}`, user);
    return response.data.data;
};

export const deleteUser = async (id) => {
    const response = await ApiDelivery.delete(`/users/${id}`);
    return response.data;
};
export {ApiDelivery};