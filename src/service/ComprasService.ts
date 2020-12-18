import { getRepository } from "typeorm";
import { Compras } from "../entity/Compras";

export class ComprasService {

    private ComprasRepository = getRepository(Compras);

    constructor() { }

    async RealizarCompra(compra) {
        return await this.ComprasRepository.save(compra);
    }

}