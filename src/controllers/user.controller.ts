import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserController{
    private userService = new UserService()
    async findAll(request: Request, response: Response){
        const users = await this.userService.findAll()
        response.json({users})
    }

    async create(request: Request, response: Response){
        const { name, email } = request.body;
        const userToCreate = {
            name, email
        }
        const userCreated = await this.userService.create(userToCreate)
        response.json({...userCreated})
    }
}