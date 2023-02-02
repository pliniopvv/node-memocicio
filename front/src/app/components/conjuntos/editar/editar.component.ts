import { Component, OnInit, Input } from '@angular/core';
import Conjunto from 'src/app/model/conjunto.model';
import { ConjuntoService } from 'src/app/service/conjunto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() conjunto: Conjunto;
  nome: String;
  id: number;
  retorno: any = [];

  constructor(private cnjDao: ConjuntoService) { }

  ngOnInit(): void {
    if (environment.DEBUG) {
    console.log("Edit,Component>", this.conjunto);
    }
    this.nome = this.conjunto.nome;
    this.id = this.conjunto.id;
  }

  alterar() {
    this.conjunto.nome = this.nome;
    this.cnjDao.update(this.id, this.conjunto).then((ret: any) => {
      if (environment.DEBUG) {
        console.log("edit|retorno>", ret);
      }
      this.retorno.sucesso = ret;
    }).catch((err) => {
      this.retorno.error = err;
    });
  }

}
