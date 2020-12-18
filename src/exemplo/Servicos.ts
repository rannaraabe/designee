import { Compras } from "../entity/Compras";
import { TipoEnvio } from "../entity/TipoEnvio";
import { TipoPagamento } from "../entity/TipoPagamento";

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
    
    constructor(descricao) {
        super(descricao)    
    }

    setTipoEnvio(indexEnvio, detalheEnvio) {
        var tipoenvio:TipoEnvio = new TipoEnvio()

        tipoenvio.tipoEnvio = Envio[indexEnvio];

        if (indexEnvio == 0) {
            tipoenvio.dadosEnvio = detalheEnvio
        }

        this.tipoEnvio = tipoenvio.tipoEnvio
    }

    setTipoPagamento(indexPagamento, detalhePagamento) {

        var tipoPagamento:TipoPagamento = new TipoPagamento() 
        tipoPagamento.tipoPagamento = Pagamento[indexPagamento];

        if (indexPagamento == 0) {
            tipoPagamento.dadosPagamento = detalhePagamento
        }

        this.tipoPagamento = tipoPagamento.tipoPagamento
    }
}