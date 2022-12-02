import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MeetingEntity } from "./Meeting";

@Entity('hoursAvailable')
export default class HoursAvailabeEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    hour: string

    @Column({
        type: 'boolean',
        default: false
    })
    selected: boolean

    @ManyToOne(()=> MeetingEntity, (meeting) => meeting.hoursAvailable)
    meeting: MeetingEntity
}