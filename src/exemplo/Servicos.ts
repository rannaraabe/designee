import { Compras } from "../entity/Compras";
import { TipoPagamento } from "../entity/TipoPagamento";
import { TipoEnvio } from "../entity/TipoEnvio";

enum Envio {
    correios,
    transportadora,
    motoboy,
    retiradaEmMaos,
}

enum Pagamento {
    cartaoCredito,
    cartaoDebito,
    avista,
    boleto,
}

export class Servicos extends Compras{

    private tp: TipoPagamento = new TipoPagamento()
    private te: TipoEnvio = new TipoEnvio()
    
    constructor(parameters) {
        super()    
    }

    realizarCompra() {
        this.te.tipoEnvio.metodoEnvio = Envio[0];
    }

    setTipoPagamento() {
        this.tp.tipoPagamento.metodoPagamento = Pagamento[2];
    }
}