import { Component, OnInit } from '@angular/core';
import Card from 'src/app/model/card.model';
import Conjunto from 'src/app/model/conjunto.model';
import Revisao from 'src/app/model/revisao.model';
import { CardService } from 'src/app/service/card.service';
import { ConjuntoService } from 'src/app/service/conjunto.service';
import { RevisaoService } from 'src/app/service/revisao.service';
import { RevUtils } from 'src/app/utils/RevUtils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aplicar',
  templateUrl: './aplicar.component.html',
  styleUrls: ['./aplicar.component.css']
})
export class AplicarComponent implements OnInit {

  frente: String;
  tras: String;
  conjuntos: Conjunto[];
  cards: Card[] = [];
  cardSelected: Card;

  constructor(private cnjDao: ConjuntoService, private revDao: RevisaoService, private cardDao: CardService) { }

  ngOnInit(): void {
    this.cnjDao.find().then((data: any) => {
      this.conjuntos = data;

      this.openCnj(this.conjuntos[0]);

      if (environment.DEBUG)
        console.log('cards> ', this.cards);
    });
    this.setCard(null);
  }

  onChange(CnjId: number): void {
    let cnj = this.conjuntos.find((c: Conjunto) => c.id == CnjId);
    this.cardSelected = null;
    this.openCnj(cnj);
  }

  openCnj(cnj: Conjunto): void {
    if (environment.DEBUG)
      console.log("cards=[]> ", this.cards);

    this.cards = [];
    let hj = new Date();

    this.setCard(null);
    cnj.cards.forEach((_card: Card) => {
      this.cardDao.findById(_card.id).then((card: Card) => {

        if (environment.DEBUG)
          console.log("cardById> ", card);

        if (card.revisao == undefined) {
          let r = new Revisao();
          r.updateAt = new Date();
          r.proximaRevisao = new Date();
          card.revisao = r;
          this.revDao.insert(card.revisao).then(ret => {
            card.revisao.id = ret.id;
            this.cardDao.update(card.id, card).then().catch((err) => console.warn("Err> ", err));
          });
        }

        card.revisao.proximaRevisao = new Date(card.revisao.proximaRevisao);
        
        // console.log("card.revisao.proximaRevisao < hj>", card.revisao.proximaRevisao < hj);
        // console.log(card.revisao.proximaRevisao)
        // console.log(hj)

        if (card.revisao.proximaRevisao < hj) {
          // if (environment.DEBUG)
          //   console.log("cards.push> ", this.cards);
          if (!this.cardSelected)
            this.setCard(card);

          if (environment.DEBUG)
            console.log("cards.push> ", card);

          this.cards.push(card);
          console.log("cards.indexOf(card)> ", this.cards.indexOf(card));
        }
      });
    });
  }

  setCard(card: Card): void {
    this.cardSelected = card;
    if (card == undefined) {
      this.frente = "Sem cartões no conjunto!";
      this.tras = "...";
      return;
    }

    if (environment.DEBUG)
      console.log("setCard> ", card);

    this.frente = card.frente;
    this.tras = "...";
  }

  nextCard(): void {
    this.cards.splice(this.cards.indexOf(this.cardSelected), 1);
    this.setCard(this.cards[0]);
  }

  mostrarResposta(): void {
    if (!this.cardSelected)
      return;
    this.tras = this.cardSelected.tras;
  }

  Dificil(): void {
    if (!this.cardSelected)
      return;

    let r = this.cardSelected.revisao;
    let nxt = RevUtils.mais10minutos(new Date());
    r.proximaRevisao = nxt;
    this.revDao.update(r.id, r).then().catch((err) => console.warn(err));
    this.nextCard();
  }

  Bom(): void {
    if (!this.cardSelected)
      return;

    let r = this.cardSelected.revisao;
    let nxt = RevUtils.mais1dia(new Date());
    r.proximaRevisao = nxt;
    this.revDao.update(r.id, r).then().catch((err) => console.warn(err));
    this.nextCard();
  }

  Facil(): void {
    if (!this.cardSelected)
      return;

    let r = this.cardSelected.revisao;
    let nxt = RevUtils.mais4dias(new Date());
    r.proximaRevisao = nxt;
    this.revDao.update(r.id, r).then().catch((err) => console.warn(err));
    this.nextCard();
  }

}
