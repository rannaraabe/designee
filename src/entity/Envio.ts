import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";


@Entity()
export class Envio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    endereco: string;
    
    @Column()
    numero: string;
    
    @Column()
    cep: string;
    
    @Column()
    bairro: string;
    
    @Column()
    cidade: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

}
