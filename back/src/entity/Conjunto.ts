import { Card } from './Card';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Conjunto {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nome: String;

    @OneToMany(() => Card, (cards: Card) => cards.conjunto)
    cards: Card[];
}