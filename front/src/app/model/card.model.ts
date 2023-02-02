import Conjunto from "./conjunto.model";
import Revisao from "./revisao.model";

export default class Card {

    id: number;
    createAt: Date;
    frente: String;
    tras: String;
    conjunto: Conjunto;
    revisao: Revisao;

}