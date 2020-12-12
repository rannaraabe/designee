import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,  
    OneToMany,   
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { CommentItem } from "./CommentItem";

import {User} from "./User";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    category: string;
    
    @Column()
    disponibility: boolean;

    @Column()
    price: number;

    @Column()
    likes: number;

    @Column()
    favorite: boolean;

    @Column()
    cart: boolean;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => User, user => user.items)
    user: User;

    @OneToMany(() => CommentItem, comment => comment.item)
    itemsComment: CommentItem[];
}
