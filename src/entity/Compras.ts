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

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

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

    abstract realizarCompra():any

    abstract setTipoPagamento():any
}