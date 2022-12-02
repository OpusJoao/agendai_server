import { AppDataSource } from "../data-source";
import UserEntity from "../database/entities/User";

export const UserRepository = AppDataSource.getRepository(UserEntity);