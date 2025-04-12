import { ResponseApiDelivery } from "../../data/source/remote/models/responseApiDelivery";
export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseApiDelivery>;
}