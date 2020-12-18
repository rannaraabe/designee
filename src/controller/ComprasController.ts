import { NextFunction, Request, Response } from "express";
import { ComprasService } from "../service/ComprasService";

class ComprasController {
    constructor(parameters) {
        
    }

    private comprasService : ComprasService = new ComprasService();

    async RealizarCompra(request: Request, response: Response, next: NextFunction){
        try {
            const compra = await this.comprasService.RealizarCompra(request.body);
            response.json({compras: compra});
        } catch (error) {
            response.json({error: "Não foi possivel realizar a compra."}).status(400);
        }
    }
    
}