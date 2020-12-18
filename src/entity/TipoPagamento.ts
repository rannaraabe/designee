import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

interface MetodoPagamento {
    cartaoCredito: string;
    avista: string;
    boleto: string;
}


@Entity()
export class TipoPagamento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoPagamento: MetodoPagamento;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

}
