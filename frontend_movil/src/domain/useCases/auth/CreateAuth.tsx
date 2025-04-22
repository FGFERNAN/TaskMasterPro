import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepository";
import { User } from "../../entities/user";

const { createUser } = new AuthRepositoryImpl();

export const CreateAuthUseCase = async(user: User) => {
    return await createUser(user);
}