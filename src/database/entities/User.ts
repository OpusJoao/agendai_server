import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MeetingEntity } from "./Meeting";

@Entity('users')
export default class UserEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    name: string

    @Column('text')
    email: string

    @OneToMany(()=> MeetingEntity, (meeting) => meeting.user)
    meetings: MeetingEntity[]
}