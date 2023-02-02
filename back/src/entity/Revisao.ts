// import { Card } from './Card';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Revisao {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    updateAt: Date;

    @Column()
    proximaRevisao: Date;

    // @OneToOne(() => Card, card => card.revisao)
    // @JoinColumn()
    // card: Card;
}