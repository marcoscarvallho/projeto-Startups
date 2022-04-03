import { Injectable } from '@angular/core';
import { Startup } from './startup';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  apiLink = 'http://localhost:8080/startup';
 
 
  getStartups(){

    this.http.get<any>(this.apiLink).subscribe(data => {
        var teste = data;
        console.log("TESTE RETORNO: ", teste)
    })

    return this.http.get<any>(this.apiLink);
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