import "reflect-metadata";
import { app } from './app';
import { env } from "process";
import * as Dotenv from 'dotenv';
Dotenv.config();

if (process.env.DEBUG) {
    console.info("[i]", " Debug mode ativado!");
}

const PORT = parseInt(env['PORT']) | 3000;

const server = app.listen(PORT);
console.log("PORT> ", PORT);

export { server };

// let c = new CardController();
// c.find().then((ret:any) => {
//     console.log(ret);
// });