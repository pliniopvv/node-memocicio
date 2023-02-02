import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Card from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_INSERT = `${environment.API}/card/insert`;
  API_UPDATE = `${environment.API}/card/update`;
  API_DELETE = `${environment.API}/card/delete`;
  API_FIND = `${environment.API}/card/find`;
  API_FINDBYID = `${environment.API}/card/findById`;

  constructor(private http: HttpClient) {
  }

  insert(card: Card): Promise<Card> {
    return this.http.post<Card>(this.API_INSERT, { data: card }).toPromise();
  }
  update(id: number, card: Card): Promise<Card> {
    return this.http.post<Card>(this.API_UPDATE, { id: id, data: card }).toPromise();
  }
  delete(id: number): Promise<Card> {
    return this.http.post<Card>(this.API_DELETE, { id }).toPromise();
  }
  find(id: number): Promise<Card> {
    return this.http.get<Card>(this.API_FIND).toPromise();
  }
  findById(id: number): Promise<Card> {
    return this.http.post<Card>(this.API_FINDBYID, { id }).toPromise();
  }



}
