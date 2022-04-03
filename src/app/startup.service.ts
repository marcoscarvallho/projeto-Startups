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

  constructor(private http: HttpClient) { }
  
}