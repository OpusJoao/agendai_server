export class Generate{
    static generateCode(quantityCharacter = 4){
        return (Math.random() + 1).toString(36).substring(quantityCharacter);
    }
}