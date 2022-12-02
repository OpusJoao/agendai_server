import { Request, Response, Router } from "express";
import meetingController from "./controllers/meeting.controller";
import UserController from "./controllers/user.controller";
export default class Routes{
    private router: Router
    private meetingController: meetingController
    private userController: UserController
    constructor(){
        this.meetingController = new meetingController();
        this.userController = new UserController();

        this.configure();
        this.configureUserController();
        this.configureMeetingController();
    }
    configure(){
        this.router = Router()
    }

    configureUserController(){
        this.router.get('/user', (request: Request, response: Response) => this.userController.findAll(request, response))
        this.router.post('/user', (request: Request, response: Response) => this.userController.create(request, response))
    
    }
    configureMeetingController(){
        this.router.get('/meeting', (request: Request, response: Response) => this.meetingController.find(request, response))
        this.router.post('/meeting', (request: Request, response: Response) => this.meetingController.create(request, response))
    }

    getRouter(){
        return this.router
    }
}