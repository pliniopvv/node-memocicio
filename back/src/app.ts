import { RevisaoController } from './dao/RevisaoController';
import { ConjuntoController } from './dao/ConjuntoController';
import express from 'express';
import * as bodyParser from 'body-parser';
import { CardController } from './dao/CardController';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

let exec: any = [[]];

app.get('/:table/:action', async (req, res) => {
    let table = req.params.table;
    let action = req.params.action;
    if (process.env.DEBUG) {
        console.log("table> ", table, " action> ", action);
    }

    let retorno = await exec[table][action](req.body);
    if (process.env.DEBUG)
        console.log("ret>", retorno);
    res.status(200).send(retorno);
});
app.post('/:table/:action', async (req, res) => {
    let table = req.params.table;
    let action = req.params.action;
    if (process.env.DEBUG) {
        console.log("table> ", table, " action> ", action, "req.body> ", req.body);
    }

    let retorno = await exec[table][action](req.body);
    if (process.env.DEBUG)
        console.log("ret>", retorno);
    res.status(200).send(retorno);
});

// TABLE 'OK'; exec[table][action]();
exec["ok"] = [];
exec["ok"]["ok"] = function () {
    return { flag: "ok" };
}

// exec["list"] = [];
// exec["list"]["all"] = function() {

// }

exec["card"] = [];
exec["card"]["insert"] = async function (body: any) {
    let cc = new CardController();
    let retorno = await cc.insert(body.data);
    return retorno;
}
exec["card"]["update"] = async function (body: any) {
    let cc = new CardController();
    let retorno = await cc.edit(body.id, body.data);
    return retorno;
}
exec["card"]["delete"] = async function (body: any) {
    let cc = new CardController();
    let retorno = await cc.delete(body.id);
    return retorno;
}
exec["card"]["find"] = async function (body: any) {
    let cc = new CardController();
    let retorno = await cc.find();
    return retorno;
}
exec["card"]["findById"] = async function (body: any) {
    let cc = new CardController();
    let retorno = await cc.findById(body.id);
    return retorno;
}

exec["conjunto"] = [];
exec["conjunto"]["insert"] = async function (body: any) {
    let cc = new ConjuntoController();
    let retorno = await cc.insert(body.data);
    return retorno;
}
exec["conjunto"]["update"] = async function (body: any) {
    let cc = new ConjuntoController();
    let retorno = await cc.edit(body.id, body.data);
    return retorno;
}
exec["conjunto"]["delete"] = async function (body: any) {
    let cc = new ConjuntoController();
    let retorno = await cc.delete(body.id);
    return retorno;
}
exec["conjunto"]["find"] = async function (body: any) {
    let cc = new ConjuntoController();
    let retorno = await cc.find();
    return retorno;
}
exec["conjunto"]["findById"] = async function (body: any) {
    let cc = new ConjuntoController();
    let retorno = await cc.findById(body.id);
    return retorno;
}

exec["revisao"] = [];
exec["revisao"]["insert"] = async function (body: any) {
    let cc = new RevisaoController();
    let retorno = await cc.insert(body.data);
    return retorno;
}
exec["revisao"]["update"] = async function (body: any) {
    let cc = new RevisaoController();
    let retorno = await cc.edit(body.id, body.data);
    return retorno;
}
exec["revisao"]["delete"] = async function (body: any) {
    let cc = new RevisaoController();
    let retorno = await cc.delete(body.id);
    return retorno;
}
exec["revisao"]["find"] = async function (body: any) {
    let cc = new RevisaoController();
    let retorno = await cc.find();
    return retorno;
}
exec["revisao"]["findById"] = async function (body: any) {
    let cc = new RevisaoController();
    let retorno = await cc.findById(body.id);
    return retorno;
}

// exec["card"] = [];
// exec["card"]["insert"] = async function (body: any) { }
// exec["card"]["edit"] = async function (body: any) { }
// exec["card"]["delete"] = async function (body: any) { }
// exec["card"]["find"] = async function (body: any) { }
// exec["card"]["findById"] = async function (body: any) { }

export { app };