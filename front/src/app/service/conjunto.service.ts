import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Conjunto from '../model/conjunto.model';

@Injectable({
  providedIn: 'root'
})
export class ConjuntoService {
  private API_INSERT = `${environment.API}/conjunto/insert`;
  private API_UPDATE = `${environment.API}/conjunto/update`;
  private API_DELETE = `${environment.API}/conjunto/delete`;
  private API_FIND = `${environment.API}/conjunto/find`;
  private API_FINDBYID = `${environment.API}/conjunto/findById`;

  constructor(private http: HttpClient) {
  }

  insert(conjunto: Conjunto): Promise<Conjunto> {
    return this.http.post<Conjunto>(this.API_INSERT, { data: conjunto }).toPromise();
  }
  update(id: number, conjunto: Conjunto): Promise<Conjunto> {
    return this.http.post<Conjunto>(this.API_UPDATE, { id, data: conjunto }).toPromise();
  }
  delete(id: number): Promise<Conjunto> {
    return this.http.post<Conjunto>(this.API_DELETE, { id }).toPromise();
  }
  find(): Promise<Conjunto[]> {
    return this.http.get<Conjunto[]>(this.API_FIND).toPromise();
  }
  findById(id: number): Promise<Conjunto> {
    return this.http.post<Conjunto>(this.API_FINDBYID, { id }).toPromise();
  }

}
