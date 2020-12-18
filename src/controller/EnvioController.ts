import { NextFunction, Request, Response } from "express";
import { EnvioService } from "../service/EnvioService";

class EnvioController {
    constructor(parameters) {
        
    }

    private envioService : EnvioService = new EnvioService();

    async RealizarEnvio(request: Request, response: Response, next: NextFunction){
        try {
            const envio = await this.envioService.RealizarEnvio(request.body);
            response.json({envio: envio});
        } catch (error) {
            response.json({error: "Não foi possivel realizar o envio."}).status(400);
        }
    }
    
}