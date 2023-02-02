import { Component, OnInit } from '@angular/core';
import Card from 'src/app/model/card.model';
import Conjunto from 'src/app/model/conjunto.model';
import { CardService } from 'src/app/service/card.service';
import { ConjuntoService } from 'src/app/service/conjunto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  actionFlags = {
    DEFAULT: 'default',
    ADICIONAR: 'adicionar',
    EDITAR: 'editar'
  }
  action: String = 'default';
  conjuntos: Conjunto[];
  cards: Card[];
  editing: Card;
  cnjSelected: Conjunto;

  constructor(private CardDao: CardService, private ConjuntoDao: ConjuntoService) {

  }

  ngOnInit(): void {
    this.ConjuntoDao.find().then((data: any) => {
      this.conjuntos = data;
      if (this.conjuntos.length > 0) {
        if (environment.DEBUG)
          console.log("CardsInFirstCnj> ", this.conjuntos[0].cards);
        this.cnjSelected = this.conjuntos[0];
        this.cards = this.conjuntos[0].cards;
      }
    });
  }

  onChange(cnj: number) {
    let ret = this.conjuntos.find(c => c.id == cnj);
    this.cnjSelected = ret;
    this.cards = ret.cards;
    if (environment.DEBUG)
      console.log("onChange> ", ret);
  }

  editar(card: Card) {
    console.log("Editar> ", card);
    this.editing = card;
    this.action = this.actionFlags.EDITAR;
  }
  deletar(card: Card) {
    console.log("Deletar> ", card);
  }

  changeView(view: String) {
    this.action = view;
    this.ConjuntoDao.find().then((data: any) => {
      this.conjuntos = data;

      this.cnjSelected = this.conjuntos.find(c => c.id == this.cnjSelected.id);

      if (this.cnjSelected.cards.length > 0) {
        this.cards = this.cnjSelected.cards;
      }
    });
  }

}
