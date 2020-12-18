import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

interface MetodoPagamento {
    metodoPagamento: string;
}


@Entity()
export class TipoPagamento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoPagamento: string;
    
    @Column()
    dadosPagamento: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

}
