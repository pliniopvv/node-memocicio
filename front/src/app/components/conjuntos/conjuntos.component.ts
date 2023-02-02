import { Component, OnInit, ViewChild } from '@angular/core';
import Conjunto from 'src/app/model/conjunto.model';
import { ConjuntoService } from 'src/app/service/conjunto.service';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.css']
})
export class ConjuntosComponent implements OnInit {

  actionFlags = {
    DEFAULT: 'default',
    ADICIONAR: 'adicionar',
    EDITAR: 'editar'
  }
  action: String = 'default';
  conjuntos: Conjunto[];
  editing: Conjunto;

  constructor(private ConjuntoDao: ConjuntoService) {

  }

  ngOnInit(): void {
    this.ConjuntoDao.find().then((data: any) => {
      this.conjuntos = data;
    });
  }

  editar(cnj: Conjunto) {
    console.log("Editar> ", cnj);
    this.editing = cnj;
    this.action = this.actionFlags.EDITAR;
  }
  deletar(cnj: Conjunto) {
    console.log("Deletar> ", cnj);
  }

  changeView(view: String) {
    this.action = view;
    this.ConjuntoDao.find().then((data: any) => {
      this.conjuntos = data;
    });
  }

}
