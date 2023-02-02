import { Revisao } from '../entity/Revisao';
import { Connection, createConnection, DeleteResult, getConnection, UpdateResult } from "typeorm";


export class RevisaoController {

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

    async insert(revisao: Revisao): Promise<Revisao> {
        let con = await this.getCon();
        let ret = await con.getRepository(Revisao).save(revisao);
        return ret;
    }
    async edit(id: number, revisao: Revisao): Promise<UpdateResult> {
        let con = await this.getCon();
        let ret = await con.manager.update(Revisao, id, revisao);
        return ret;
    }
    async delete(id: number): Promise<DeleteResult> {
        let con = await this.getCon();
        let ret = await con.manager.delete(Revisao, id);
        return ret;
    }
    async find(): Promise<Revisao[]> {
        let con = await this.getCon();
        let ret = await con.getRepository(Revisao).find({ relations: ["card"] });
        return ret;
    }
    async findById(id: number): Promise<Revisao> {
        let con = await this.getCon();
        let ret = await con.getRepository(Revisao).findOne(id, { relations: ["card"] });
        return ret;
    }

}