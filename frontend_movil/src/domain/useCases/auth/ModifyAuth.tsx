import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepository";
import { User } from "../../entities/user";

const { modifyUser } = new AuthRepositoryImpl();

export const ModifyAuthUseCase = async(user: User) => {
    return await modifyUser(user);
}