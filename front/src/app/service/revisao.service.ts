import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Revisao from '../model/revisao.model';

@Injectable({
  providedIn: 'root'
})
export class RevisaoService {
  API_INSERT = `${environment.API}/revisao/insert`;
  API_UPDATE = `${environment.API}/revisao/update`;
  API_DELETE = `${environment.API}/revisao/delete`;
  API_FIND = `${environment.API}/revisao/find`;
  API_FINDBYID = `${environment.API}/revisao/findById`;

  constructor(private http: HttpClient) {
  }

  insert(revisao: Revisao): Promise<Revisao> {
    return this.http.post<Revisao>(this.API_INSERT, { data: revisao }).toPromise();
  }
  update(id: number, revisao: Revisao): Promise<Revisao> {
    return this.http.post<Revisao>(this.API_UPDATE, { id, data: revisao }).toPromise();
  }
  delete(id: number): Promise<Revisao> {
    return this.http.post<Revisao>(this.API_DELETE, { id }).toPromise();
  }
  find(id: number): Promise<Revisao[]> {
    return this.http.get<Revisao[]>(this.API_FIND).toPromise();
  }
  findById(id: number): Promise<Revisao> {
    return this.http.post<Revisao>(this.API_FINDBYID, { id }).toPromise();
  }

}
