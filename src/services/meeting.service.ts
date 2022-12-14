import HoursAvailabeEntity from "../database/entities/HoursAvailable"
import { MeetingRepository } from "../repositories/MeetingRepository"
import { Generate } from "../utils/generate"
import Sort from "../utils/sort"
import HourAvailableService from "./hourAvailable.service"

export default class MeetingService{
    private meetingRepository = MeetingRepository
    private hourAvailableService = new HourAvailableService()
    async findAll(){
        const meetings = await this.meetingRepository.find({
            relations:{
                user: true
            }
        })
        return meetings
    }

    async findMeetingsByUserId(userId){
        const meetings = await this.meetingRepository.find({
            relations:{
                user: true,
                hoursAvailable: true
            },
            where: {
                user: {
                    id: userId
                }
            }
        })
        return meetings
    }

    async findByCode(code: string){
        const meetings = await this.meetingRepository.find({
            relations:{
                user: true,
                hoursAvailable: true
            },
            where: {
                code: code
            }
        })
        return meetings
    }
    

    async create(meeting){
        const code = Generate.generateCode(4);
        const sortedHoursAvailable = Sort.sortHoursAvailable(meeting.hoursAvailable)
        const startTime = sortedHoursAvailable[0].hour
        const endTime = sortedHoursAvailable[sortedHoursAvailable.length - 1].hour
        const meetingToCreate = {
            name: meeting.name, 
            code,
            day: meeting.date, 
            timeDuration: Number(meeting.timeDuration), 
            startTime,
            endTime,
            isUniqueUse: false,
            isValid: true,
            user: 2,
        }
        const meetingToEntity = this.meetingRepository.create(meetingToCreate)
        const meetingCreated  = await this.meetingRepository.save(meetingToEntity) 
        let arrayCreatedHourAvailable = []
        sortedHoursAvailable.map(async (hourAvailable) => {
            const currentCreatedHourAvailable = await this.hourAvailableService.create(hourAvailable, meetingCreated.id)
            arrayCreatedHourAvailable.push(currentCreatedHourAvailable)
        })

        return meetingToCreate
    }

}