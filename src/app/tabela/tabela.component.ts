import { Component, OnInit } from '@angular/core';
import { Startup } from '../startup';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private startupService: StartupService) { }
  startups: Startup[] = [];
  displayedColumns: string[] = ['nome'];
  dataSource : Startup[] = [];

  ngOnInit(): void {
 
    // this.startupService.getStartups().subscribe(dados => this.startups = dados);
    this.startups = this.teste()

    // console.log('batatadoce', this.startups)
    // this.dataSource = this.startups;

    //this.startupService.searchStartupByLocalizacao("Recife");
    //this.startupService.searchStartupByFuncionarios(1);

  }

  public teste() {
    this.startups = this.startupService.getStartups()
    return this.startups;
  }
  
  pegar(id: string){
    console.log(id);
  }

}
