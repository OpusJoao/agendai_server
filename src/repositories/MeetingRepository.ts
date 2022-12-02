import { AppDataSource } from "../data-source";
import { MeetingEntity } from "../database/entities/Meeting";

export const MeetingRepository = AppDataSource.getRepository(MeetingEntity);