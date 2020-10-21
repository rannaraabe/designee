import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,     
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

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
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => User, user => user.splashs)
    user: User;

}