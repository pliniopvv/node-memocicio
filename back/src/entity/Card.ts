import { Revisao } from './Revisao';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conjunto } from "./Conjunto";

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    createAt: Date;

    @Column()
    frente: String;

    @Column()
    tras: String;

    @ManyToOne(() => Conjunto, (conjunto: Conjunto) => conjunto.cards)
    conjunto: Conjunto;

    @OneToOne(() => Revisao)
    @JoinColumn()
    revisao: Revisao;
}