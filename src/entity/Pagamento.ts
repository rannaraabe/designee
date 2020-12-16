import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";


@Entity()
export class Pagamento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoPagamento: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

}
