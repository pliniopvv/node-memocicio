import { Component, OnInit } from '@angular/core';
import Conjunto from 'src/app/model/conjunto.model';
import { ConjuntoService } from 'src/app/service/conjunto.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  retorno: any = [];
  nome: String;
  nome_copy: String;

  constructor(private ConjuntoDao: ConjuntoService) { }

  ngOnInit(): void {
  }

  salvar() {
    this.nome_copy = this.nome;
    let c: Conjunto = new Conjunto();
    c.nome = this.nome_copy;
    this.ConjuntoDao.insert(c).then((ret: any) => {
      this.retorno.sucesso = ret;
    }).catch((err) => {
      this.retorno.error = err;
    });
    this.nome = "";

    setTimeout(() => this.retorno = [], 2000);
  }
}
