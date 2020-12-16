import { getRepository } from "typeorm";
import { User } from "../entity/User";

export class UsuarioService {

    private userRepository = getRepository(User);

    constructor() { }

    async getAllUsers():Promise<any> {
        return await this.userRepository.find();
    }
    
    async getOne(id) {
        return await this.userRepository.findOne(id);
    }

    async save(user) {
        return await this.userRepository.save(user);
    }

    async update(id, body) {
        return await this.userRepository.update(id, body);
    }

    async remove(user) {
        return await this.userRepository.remove(user);
    }

    async findOneUser(user){
        return await this.userRepository.find(user);
    }

}