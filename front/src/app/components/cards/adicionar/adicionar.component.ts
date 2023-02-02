import { Component, Input, OnInit } from '@angular/core';
import Card from 'src/app/model/card.model';
import Conjunto from 'src/app/model/conjunto.model';
import { CardService } from 'src/app/service/card.service';
import { ConjuntoService } from 'src/app/service/conjunto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  retorno: any = [];
  nome: String;
  nome_copy: String;
  @Input() conjunto: Conjunto;
  frente: String;
  tras: String;

  constructor(private cardDao: CardService, private CnjDao: ConjuntoService) { }

  ngOnInit(): void {
  }

  salvar() {
    this.nome_copy = this.nome;
    let c: Card = new Card();

    c.frente = this.frente;
    c.tras = this.tras;
    c.createAt = new Date();
    c.conjunto = this.conjunto;

    if (environment.DEBUG)
      console.log("cards|insert> ", c);

    this.cardDao.insert(c).then((ret: any) => {
      this.retorno.sucesso = ret;
    }).catch((err) => {
      this.retorno.error = err;
    });

    this.frente = "";
    this.tras = "";

    setTimeout(() => this.retorno = [], 2000);
  }

}
