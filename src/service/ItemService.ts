import { getRepository } from "typeorm";
import { Item } from "../entity/Item";

export class ItemService {

    private itemRepository = getRepository(Item);

    constructor() { }

    async getAllItems() {
        return await this.itemRepository.find();
    }
    
    async getOne(id) {
        return await this.itemRepository.findOne(id);
    }

    async save(item) {
        return await this.itemRepository.save(item);
    }

    async update(id, body) {
        return await this.itemRepository.update(id, body);
    }

    async remove(item) {
        return await this.itemRepository.remove(item);
    }

    async findAllItems(user){
        return await this.itemRepository.find(user);
    }


}