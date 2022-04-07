import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Startup } from '../startup';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  valorAsync = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('valor assincrono'), 2000)
  });
  constructor(private startupService: StartupService) { }
  controleAutoComplete = new FormControl();
  startups: Startup[] = [];
  startupOn: Startup| undefined;
  displayedColumns: string[] = ['nome', 'qtdFuncionarios', 'industria', 'localizacao', 'descricao', 'rank'];
  dataSet$!: Observable<Startup[]>;
  filteredOptions: Observable<Startup[]> | undefined;
  categorias: string[] = ['Seed Stage', 'Angel Investors', 'Early Stage', 'Series A', 'Series B', 'Series C', 'Mezzanine']
  

  ngOnInit(): void {
    this.refresh()
  }
  refresh() {
    this.dataSet$ = this.startupService.getTestFields().pipe(
      map(data => data.filter(p => p.id)),
    );
  }
  
  displayFn(startup: string): string {
    return startup;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  
  pegar(id: string){
    console.log("Retorno da funcao searchbyid: ",this.startupService.getStartups2(id))
  }
}
