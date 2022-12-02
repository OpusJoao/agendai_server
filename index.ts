import 'reflect-metadata'
import 'dotenv/config'

import TypeORMDatabase from "./src/database";
import Server from "./src/server";

const server = new Server();
const database = new TypeORMDatabase()

if(database.initialize())
    server.start()