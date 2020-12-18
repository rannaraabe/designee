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

export class Servicos extends Compras {

    constructor(descricao) {
        super(descricao)
    }

    setTipoEnvio(indexEnvio, detalheEnvio) {
        var tipoenvio: TipoEnvio = new TipoEnvio()

        tipoenvio.tipoEnvio = Envio[indexEnvio];
        tipoenvio.dadosEnvio = detalheEnvio


        this.tipoEnvio = tipoenvio.tipoEnvio
    }

    setTipoPagamento(indexPagamento, detalhePagamento) {

        var tipoPagamento: TipoPagamento = new TipoPagamento()
        tipoPagamento.tipoPagamento = Pagamento[indexPagamento];

        tipoPagamento.dadosPagamento = detalhePagamento


        this.tipoPagamento = tipoPagamento.tipoPagamento
    }
}