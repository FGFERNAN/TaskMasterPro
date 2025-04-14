export interface User {
    id?: number;
    nombre: string;
    apellidos: string;
    email: string;
    telefono?: string;
    password?: string;
    rolID: number;
    tipo_documento: number;
    session_token?: string;
}