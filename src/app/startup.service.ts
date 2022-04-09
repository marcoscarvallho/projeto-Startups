import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Startup } from './startup';
import { Subscription, delay, Observable } from 'rxjs';
import axios from 'axios'
// import { parse } from 'path';

@Injectable({providedIn: 'root'})
export class StartupService {
  apiLink = 'http://localhost:8080/startup';
  public startups: Startup[] = [];
  public startupOn: Startup | undefined;
  public response: unknown;
  public id = '';
  public objeto: Startup[] = [];

  constructor(private http: HttpClient) { }

  public getIdDetail(){
    return this.id;
  }

  public setIdDetail(id: string){
    this.id = id
  }

  public getStartups(){
    this.http.get<Startup[]>(this.apiLink).subscribe(data => {
        this.startups = data;
        console.log("TESTE RETORNO TODOS: ", this.startups)
    })
    return this.startups;
  }

  // public getStartups2(id:String){
  //   console.log("id", id);
  //   this.http.get<Startup[]>(this.apiLink + '/filtroid', {
  //     headers: {
  //       id: "1"
  //     }
  //   }).subscribe(data => {console.log("TESTE:", data);  return data })
  //   // console.log("this.response:", JSON.stringify(this.response));
  //   // return this.response;
  // }

  public async getStartups2Axios (id:String):Promise<Startup>{
    console.log("id", id);
    this.response =  await axios.get<Startup>(this.apiLink + '/filtroid', {
      headers: {
        id: "1"
      }
     }) 
     return this.response as Startup;
    // console.log("this.StartupOnm 2:", this.startupOn);
    // return this.startupOn as Startup;
  }

  public async getStartups2 (id: string) :Promise<any>{
    var parseId = String(id);
    var testeG
    await this.http.get<Startup[]>(this.apiLink + '/filtroid', {
      headers: {
        id: "1"
      }
    }).subscribe(async response => {
      testeG = response;      
    });
    
    
    return testeG
    // console.log("this.response:", JSON.stringify(this.response));
    // return this.response;
  }


  public async testeGabryel (id: string) :Promise<any>{
    var parseId = String(id);
    var testeG
    await axios.get<Startup[]>(this.apiLink + '/filtroid', {
      headers: {
        id: "1"
      }
    }).then(async response => {
      testeG = response.data;
    });

    console.log('resultado', testeG)
    return testeG
    
    
    return testeG
    // console.log("this.response:", JSON.stringify(this.response));
    // return this.response;
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