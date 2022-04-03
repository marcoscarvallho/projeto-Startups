import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Startup } from './startup';

@Injectable({providedIn: 'root'})
export class StartupService {
  apiLink = 'http://localhost:8080/startup';
  public startups: Startup[] = [];
  
  public getStartups(){
    this.http.get<Startup[]>(this.apiLink).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO: ", this.startups)
    })
    return this.startups;
  }

  public searchStartupByLocalizacao(localizacao: String){
    this.http.put<Startup[]>(this.apiLink + '/filtrolocal', localizacao).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO2: ", this.startups)
    })
    return this.startups;
  }

  public searchStartupByFuncionarios(qtdFuncionarios: number){
    var parseQtd = Number(qtdFuncionarios);
    this.http.put<Startup[]>(this.apiLink + '/filtrofuncionarios', qtdFuncionarios).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO2: ", this.startups)
    })
    return this.startups;
  }

  
  public createStartup(eachProduct: any){
    console.log("BALAJDJADJ", eachProduct)
    this.http.post<any>(this.apiLink + '/add', eachProduct)
    .subscribe(res => console.log('Feito'));
  }

  constructor(private http: HttpClient) { }

}