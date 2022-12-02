import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import HoursAvailabeEntity from "./HoursAvailable";
import UserEntity from "./User";

@Entity('meetings')
export class MeetingEntity{
    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        type: 'text',
        nullable: false
    })
    name: string

    @Column({
        type: 'text',
        nullable: false
    })
    day: string

    @Column({
        type: 'text', 
        nullable: false
    })
    startTime: string

    @Column({
        type: 'text', 
        nullable: false
    })
    endTime: string

    @Column({
        type: 'int'
    })
    timeDuration: number

    @Column({
        type: 'text', 
        nullable: true
    })
    link: string

    @Column({
        type: 'boolean', 
        nullable: false,
        default: false
    })
    isUniqueUse: boolean

    @Column({
        type: 'boolean', 
        nullable: false,
        default: true
    })
    isValid: boolean

    @ManyToOne(()=> UserEntity, (user) => user.meetings)
    user:UserEntity

    @OneToMany(() => HoursAvailabeEntity, (hoursAvailable) => hoursAvailable.meeting)
    hoursAvailable: HoursAvailabeEntity[]
}