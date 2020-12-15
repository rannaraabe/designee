import { getRepository } from "typeorm";
import { User } from "../entity/User";

export class UsuarioService {

    private userRepository = getRepository(User);

    constructor() {
        
    }

    async getAllUsers() {
        const user = await this.userRepository.find();
        return user;
    }
    
    async getOne(id)
    {
        const user = await this.userRepository.findOne(id);
        return user;
    }

    async save(user){
        return await this.userRepository.save(user)
    }


}