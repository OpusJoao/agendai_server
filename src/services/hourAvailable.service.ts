import { HoursAvailableRepository } from "../repositories/HoursAvailableRepository"

export default class HourAvailableService{
    private hourAvailableRepository = HoursAvailableRepository
    async findAll(){
        const meetings = await this.hourAvailableRepository.find({
            relations:{
                meeting: true
            }
        })
        return meetings
    }

    async findHoursAvailableByMeetingId(meetingId){
        const meetings = await this.hourAvailableRepository.find({
            where: {
                meeting: {
                    id: meetingId
                }
            }
        })
        return meetings
    }
    

    async create(hourAvailable, meetingId){
        const hourAvailableToCreate = this.hourAvailableRepository.create({
            ...hourAvailable,
            selected: false,
            meeting: meetingId
        });
        const hourAvailableCreated = await this.hourAvailableRepository.insert(hourAvailableToCreate);

        return hourAvailableCreated;
    }
}