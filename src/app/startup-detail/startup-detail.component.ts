import { Component, Input, OnInit } from '@angular/core';
import { Startup } from '../startup';import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StartupService } from '../startup.service';
import { TabelaComponent } from '../tabela/tabela.component'
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-startup-detail',
  templateUrl: './startup-detail.component.html',
  styleUrls: ['./startup-detail.component.css']
})
export class StartupDetailComponent implements OnInit {
  @Input() startup?: Startup;
  startups: Startup[] = []
  Startups$!: Observable<Startup[]>;
  displayedColumns: string[] = ['nome', 'qtdFuncionarios', 'industria', 'localizacao', 'descricao', 'rank'];
  // valorAsync = new Promise((resolve, reject)=>{
  //   setTimeout(() => resolve(this.startupService.getStartups2(this.startupService.getIdDetail())),2000)
  // });
  public startupOn: Startup | undefined;
  constructor( public startupService: StartupService ) {}

  ngOnInit(){
    // this.teste()
    // console.log("aqui",this.startupService.getIdDetail())
  }
  
  getStartup(): void{
    //this.startupOn = this.tabelaComponent.pegar(String(this.route.snapshot.paramMap.get('id')));
    console.log('aaaaaaa')
    // const id = Number((this.route.snapshot.paramMap.get('id'));this.startupService.searchStartupById(id).subscribe(startup => this.startup = startup);
    // const id = String(this.route.snapshot.paramMap.get('id'));
    // this.startupOn = this.startupService.searchStartupById(id)
  }
  goBack(): void {
    // this.location.back();
  }
  
  // async teste(){
  //   const id = await this.startupService.getIdDetail()
  //   this.startups = await this.startupService.getStartups2(id);
  //   await console.log("e o resultado é:", this.startups)
  //   return await this.startups
  // }
}
