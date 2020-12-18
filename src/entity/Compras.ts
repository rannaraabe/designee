import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,     
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import {Item} from "./Item";
import {User} from "./User";

@Entity()
export abstract class Compras {

    constructor(descricao){
        this.descricao = descricao
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    tipoPagamento: string;

    @Column()
    tipoEnvio: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => Item, item => item.itemsComment)
    item: Item;

    @ManyToOne(() => User, user => user.compras)
    user: User;

    abstract setTipoEnvio(indexEnvio, detalheEnvio):any

    abstract setTipoPagamento(indexPagamento, detalhePagamento):any
}