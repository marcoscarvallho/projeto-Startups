import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
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
  displayedColumns: string[] = ['nome', 'qtdFuncionarios', 'industria', 'localizacao', 'descricao', 'rank'];
  dataSource : Startup[] = [];
  controleAutoComplete = new FormControl();
  categorias: string[] = ['Seed Stage', 'Angel Investors', 'Early Stage', 'Series A', 'Series B', 'Series C', 'Mezzanine']
  filteredOptions: Observable<Startup[]> | undefined;
  ngOnInit(): void {
    
 
    // this.startupService.getStartups().subscribe(dados => this.startups = dados);
    this.startups = this.teste()

    // console.log('batatadoce', this.startups)
    // this.dataSource = this.startups;

    // this.startupService.searchStartupById(1);
    //this.startupService.searchStartupByFuncionarios(1);

  }

  displayFn(startup: string): string {
    return startup;
  }

  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }
  // }



  public teste() {
    this.startups = this.startupService.getStartups()
    return this.startups;
  }

}
