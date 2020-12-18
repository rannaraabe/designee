import { Compras } from "../entity/Compras";
import { TipoPagamento } from "../entity/TipoPagamento";

export class Servicos extends Compras{

    private tipoPagamento: TipoPagamento = new TipoPagamento()
    
    constructor(parameters) {
        super()    
    }

    realizarCompra() {
        //Implementar aqui logica de finalizar compra
    }
    setTipoPagamento() {
        this.tipoPagamento.tipoPagamento.avista = "100 R$";
    }
}