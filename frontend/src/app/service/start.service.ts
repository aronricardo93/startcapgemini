import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Start } from '../models/Start';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  private startUrl = 'http://localhost:8080/api/start';

  constructor(private httpClient: HttpClient) { }

  lista(): Observable<Start[]>{
    return this.httpClient.get<Start[]>(this.startUrl + '/list');
  }

  public dadosPorId(id: number): Observable<Start>{
    return this.httpClient.get<Start>(this.startUrl + `/${id}`);
  }

  public dadosPorNome(nome: string): Observable<Start>{
    return this.httpClient.get<Start>(this.startUrl + `/name/${nome}`);
  }

  public salvar(start: Start): Observable<any>{
    return this.httpClient.post<any>(this.startUrl, start);
  }

  public update(id: number, start: Start): Observable<any>{
    return this.httpClient.put<any>(this.startUrl + `/${id}`, start);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.startUrl + `/${id}`)
  }
}
