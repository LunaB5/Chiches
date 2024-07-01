import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chiche } from './chiches-list/Chiche';

const URL = 'https://66818b4004acc3545a06faa4.mockapi.io/api/chiches/chiche'

@Injectable({
  providedIn: 'root'
})
export class ChicheDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Chiche[]>{
    return this.http.get<Chiche[]>(URL);
  }
}
