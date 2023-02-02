import { Card } from './../entity/Card';
import { Connection, createConnection, DeleteResult, getConnection, UpdateResult } from "typeorm";


export class CardController {

    async getCon(): Promise<Connection> {
        let con;

        let conName = process.env.DB_CONN;

        if (conName == null)
            conName = 'production';

        try {
            con = await getConnection(conName);
        } catch (error) {
            con = await createConnection(conName);
        }
        return con;
    }

    async insert(card: Card): Promise<Card> {
        let con = await this.getCon();
        let ret = await con.getRepository(Card).save(card);
        return ret;
    }
    async edit(id: number, card: Card): Promise<UpdateResult> {
        let con = await this.getCon();
        let ret = await con.manager.update(Card, id, card);
        return ret;
    }
    async delete(id: number): Promise<DeleteResult> {
        let con = await this.getCon();
        let ret = await con.manager.delete(Card, id);
        return ret;
    }
    async find(): Promise<Card[]> {
        let con = await this.getCon();
        let ret = await con.getRepository(Card).find({ relations: ["revisao", "conjunto"] });
        return ret;
    }
    async findById(id: number): Promise<Card> {
        let con = await this.getCon();
        let ret = await con.getRepository(Card).findOne(id, { relations: ["revisao", "conjunto"] });
        return ret;
    }

}