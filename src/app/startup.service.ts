import { Injectable } from '@angular/core';
import { Startup } from './startup';
import { STARTUPS } from './startup-testes';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  apiLink = 'http://localhost:8080/startup';
  getStartups(){
    return this.http.get(`${this.apiLink}`);
  }
  getStartup(id: number): Observable<Startup> {
    const startup = STARTUPS.find(h => h.id === id)!;
    return of(startup);
  }
  createStartup(nome: string, qtdFuncionarios: string, industria: string, localizacao: string, rank: string, descricao: string) {
    const objStartup = {
      nome,
      qtdFuncionarios,
      industria,
      localizacao,
      rank,
      descricao,
    };
    console.log(objStartup);

    // ==> (POST - URL no Back-End:): http://localhost:8000/api/funcionarios
    this
      .http
      .post(`${this.apiLink}`, objStartup)
      .subscribe(res => console.log('Feito'));
  }

  constructor(private http: HttpClient) { }
  
}