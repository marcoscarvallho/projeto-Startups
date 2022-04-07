import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Startup } from './startup';
import { delay, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StartupService {
  apiLink = 'http://localhost:8080/startup';
  public startups: Startup[] = [];
  public startupOn: Startup | undefined;
  public response: unknown;


  constructor(private http: HttpClient) { }

  public getStartups(){
    this.http.get<Startup[]>(this.apiLink).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO TODOS: ", this.startups)
    })
    return this.startups;
  }

  public async getStartups2(id:String){
    this.response = await this.http.get<Startup[]>(this.apiLink + '/filtroid', {
      headers: {
        id: "1"
      }
    })
    console.log("this.response:", this.response);
    return this.response;
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
    return this.startups;
  }

  public searchStartupById(id: string){
    console.log("opa fui chamado do alem", id)
    var parseId = String(id);
     this.http.put<Startup>(this.apiLink + '/filtroid', parseId).subscribe(data => {
      return data;
        // console.log("TESTE RETORNO ID: ", this.startupOn)
    })  
    // console.log("TESTE RETORNO ID: 2 ", this.startupOn) 
    // return this.startupOn
  }

  public createStartup(eachProduct: any){
    console.log("BALAJDJADJ", eachProduct)
    this.http.post<any>(this.apiLink + '/add', eachProduct)
    .subscribe(res => console.log('Feito'));
  }

  

}