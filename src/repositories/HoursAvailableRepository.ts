import { AppDataSource } from "../data-source";
import HoursAvailabeEntity from "../database/entities/HoursAvailable";

export const HoursAvailableRepository = AppDataSource.getRepository(HoursAvailabeEntity);