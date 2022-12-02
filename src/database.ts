import { AppDataSource } from "./data-source";

export default class TypeORMDatabase{
    initialize(){
        try{
            AppDataSource.initialize()
            console.log('[Database.initialize] Database initialized')
        }catch(e){
            console.error(e.message)
            return false
        }

        return true

    }
}