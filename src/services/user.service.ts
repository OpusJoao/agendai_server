import { UserRepository } from "../repositories/UserRepository"

export default class UserService{
    private userRepository = UserRepository
    async findAll(){
        const users = await this.userRepository.find({
            relations: {
                meetings: true
            }
        })
        return users
    }

    async create(user){
        const userToCreate = this.userRepository.create(user)
        const userCreated  = await this.userRepository.save(userToCreate) 
        return userCreated
    }
}