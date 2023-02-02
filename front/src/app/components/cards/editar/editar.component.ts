import { Component, Input, OnInit } from '@angular/core';
import Card from 'src/app/model/card.model';
import Conjunto from 'src/app/model/conjunto.model';
import { CardService } from 'src/app/service/card.service';
import { ConjuntoService } from 'src/app/service/conjunto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  retorno: any = [];
  nome: String;
  nome_copy: String;
  @Input() editing: Card;
  frente: String;
  tras: String;

  constructor(private cardDao: CardService, private CnjDao: ConjuntoService) { }

  ngOnInit(): void {
    this.frente = this.editing.frente;
    this.tras = this.editing.tras;
  }

  salvar() {
    this.nome_copy = this.nome;
    let c: Card = this.editing;

    c.frente = this.frente;
    c.tras = this.tras;
    // c.createAt = new Date();

    if (environment.DEBUG)
      console.log("cards|insert> ", c);

    this.cardDao.update(c.id, c).then((ret: any) => {
      this.retorno.sucesso = ret;
    }).catch((err) => {
      this.retorno.error = err;
    })
  }

}
