import { getRepository } from "typeorm";
import { Envio } from "../entity/Envio";

export class EnvioService {

    private EnvioRepository = getRepository(Envio);

    constructor() { }

    async RealizarEnvio(envio) {
        return await this.EnvioRepository.save(envio);
    }

}