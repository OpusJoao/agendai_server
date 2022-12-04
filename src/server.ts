import express, {Express, Request, Response } from 'express'
import Routes from './routes';
import cors from 'cors'

export default class Server{
    private app: Express
    private PORT: number | string

    constructor(){
        this.configure();
        this.routes();
    }

    configure(): void{
        this.PORT = process.env.PORT || 3000 
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors())
    }

    routes(): void{
        const routes = new Routes();
        this.app.get('/', (req: Request, res: Response) => {
            res.json({"msg": 'ok'})
        });
        this.app.use(routes.getRouter())
    }

    start(){
        return this.app.listen(this.PORT, () => {
            console.log(`[Server] Server is running on port ${this.PORT}`);
        })
    }
}