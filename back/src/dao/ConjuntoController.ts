import { Conjunto } from '../entity/Conjunto';
import { Connection, createConnection, DeleteResult, getConnection, UpdateResult } from "typeorm";


export class ConjuntoController {

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

    async insert(conjunto: Conjunto): Promise<Conjunto> {
        let con = await this.getCon();
        let ret = await con.getRepository(Conjunto).save(conjunto);
        return ret;
    }
    async edit(id: number, conjunto: Conjunto): Promise<UpdateResult> {
        let con = await this.getCon();
        let cnj = new Conjunto();
        cnj.id = conjunto.id;
        cnj.nome = conjunto.nome;
        let ret = await con.manager.update(Conjunto, id, cnj);
        return ret;
    }
    async delete(id: number): Promise<DeleteResult> {
        let con = await this.getCon();
        let ret = await con.manager.delete(Conjunto, id);
        return ret;
    }
    async find(): Promise<Conjunto[]> {
        let con = await this.getCon();
        let ret = await con.getRepository(Conjunto).find({ relations: ["cards"] });
        return ret;
    }
    async findById(id: number): Promise<Conjunto> {
        let con = await this.getCon();
        let ret = await con.getRepository(Conjunto).findOne(id, { relations: ["cards"] });
        return ret;
    }

}