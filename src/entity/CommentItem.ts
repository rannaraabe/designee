import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,     
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import {Item} from "./Item";

@Entity()
export class CommentItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => Item, item => item.itemsComment)
    item: Item;

}