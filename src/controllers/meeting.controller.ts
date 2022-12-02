import { Request, Response } from "express";
import { MeetingEntity } from "../database/entities/Meeting";
import MeetingService from "../services/meeting.service";

export default class meetingController{
    private meetingService = new MeetingService()
    async find(request: Request, response: Response){
        const { userId } = request.query
        let meetings
        if(userId){
            meetings = await this.meetingService.findMeetingsByUserId(userId)
        }
        else{
            meetings = await this.meetingService.findAll()
        }
        response.json({meetings})
    }

    async create(request: Request, response: Response){
        const { name, date, timeDuration, hoursAvailable } = request.body
        const meetingToCreate = { name, date, timeDuration, hoursAvailable }
        const meetingCreated = await this.meetingService.create(meetingToCreate);
        response.status(201).json({...meetingCreated})
    }

    async findMeetingsByUserId(request: Request, response: Response){
        const { userId } = request.params;
        const meetings = await this.meetingService.findMeetingsByUserId(userId);
        response.json(meetings)

    }
}