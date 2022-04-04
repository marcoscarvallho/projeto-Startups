import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Startup } from './startup';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StartupService {
  apiLink = 'http://localhost:8080/startup';
  public startups: Startup[] = [];
  public startupOn: Startup | undefined;

  public getStartups(){
    this.http.get<Startup[]>(this.apiLink).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO TODOS: ", this.startups)
    })
    this.load();
    return this.startups;
  }
  getTestFields(): Observable<Startup[]> {
    return this.http.get<Startup[]>(this.apiLink);
  }

  public searchStartupByLocalizacao(localizacao: String){
    this.http.put<Startup[]>(this.apiLink + '/filtrolocal', localizacao).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO LOCALIZACAO: ", this.startups)
    })
    return this.startups;
  } 

  public searchStartupByFuncionarios(qtdFuncionarios: number){
    var parseQtd = String(qtdFuncionarios);
    this.http.put<Startup[]>(this.apiLink + '/filtrofuncionarios', parseQtd).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO FUNCIONARIO: ", this.startups)
    })
    this.load();
    return this.startups;
  }

  public searchStartupById(id: string){
    console.log("opa fui chamado do alem")
    var parseId = String(id);
    this.http.put<Startup>(this.apiLink + '/filtroid', parseId).subscribe(data => {
        this.startupOn = data;
        console.log("TESTE RETORNO ID: ", this.startupOn)
    })   
    return this.startupOn
  }

  public load() {
    //Session storage salva os dados como string
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) && location.reload();
    sessionStorage['refresh'] = false;
  }
  
  public createStartup(eachProduct: any){
    console.log("BALAJDJADJ", eachProduct)
    this.http.post<any>(this.apiLink + '/add', eachProduct)
    .subscribe(res => console.log('Feito'));
  }

  constructor(private http: HttpClient) { }

}