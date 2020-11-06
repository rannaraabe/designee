import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,  
    OneToMany,   
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { CommentSplash } from "./CommentSplash";

import {User} from "./User";

@Entity()
export class Splash {

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
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => User, user => user.splashs)
    user: User;

    @OneToMany(() => CommentSplash, comment => comment.splash)
    splashsComment: CommentSplash[];

}