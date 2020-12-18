import { NextFunction, Request, Response } from "express";
import { Servicos } from "../exemplo/Servicos";
import { ComprasService } from "../service/ComprasService";
import { ItemService } from "../service/ItemService";
import { UsuarioService } from "../service/UsuarioService";

export class ComprasController {

    private usuarioService: UsuarioService = new UsuarioService()
    private itemService: ItemService = new ItemService()
    
    constructor(parameters) {
        
    }

    private comprasService : ComprasService = new ComprasService();

    async RealizarCompra(request: Request, response: Response, next: NextFunction){
        try{

            const user = await this.usuarioService.getOne(request.body.id_user)
            const item = await this.itemService.getOne(request.body.id_item)

            var novoServico:Servicos  = new Servicos(request.body.descricao)
            novoServico.setTipoEnvio(request.body.index_tipoEnvio, request.body.detalheEnvio)
            novoServico.setTipoPagamento(request.body.index_pagamento, request.body.detalhePagamento)
            
            novoServico.user = user
            novoServico.item = item

            console.log(novoServico);
            
            const compra = await this.comprasService.RealizarCompra(novoServico)

            response.json({compras: compra})
        } catch (error) {
            response.json({error: "Não foi possivel realizar a compra."}).status(400)
        }
    }
    
}