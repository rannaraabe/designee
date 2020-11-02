import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,     
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import {Splash} from "./Splash";

@Entity()
export class CommentSplash {

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

    @ManyToOne(() => Splash, splash => splash.splashsComment)
    splash: Splash;

}