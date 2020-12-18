import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

interface MetodoEnvio {
    metodoEnvio: string; 
}

@Entity()
export class TipoEnvio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoEnvio: MetodoEnvio;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

}
