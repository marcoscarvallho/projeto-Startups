import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { Startup } from '../startup';
import { StartupService } from '../startup.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  locafizacaoForm = new FormControl('');
  categoriaForm = new FormControl('');
  qtdForm = new FormControl('');
  valorAsync = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('valor assincrono'), 2000)
  });
  constructor(public startupService: StartupService) { }
  controleAutoComplete = new FormControl();
  startups: Startup[] = [];
  startupOn: Startup| undefined;
  displayedColumns: string[] = ['nome', 'qtdFuncionarios', 'industria', 'localizacao', 'descricao', 'rank'];
  dataSet$!: Observable<Startup[]>;
  filteredOptions: Observable<Startup[]> | undefined;
  categorias: string[] = ['Selecione','Seed Stage', 'Angel Investors', 'Early Stage', 'Series A', 'Series B', 'Series C', 'Mezzanine']
  busy: Subscription | undefined;
  filtroCid = '';
  filtroQtd = 0;
  categoriaF = '';

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    console.log('resultado aqui',this.filtroQtd)
    console.log("value", this.categoriaF)
    this.dataSet$ = this.startupService.getTestFields().pipe(
      map(data => data.filter(startup =>{
        return startup.localizacao.toLowerCase().includes(this.filtroCid.toLowerCase()) && startup.qtdFuncionarios > this.filtroQtd && startup.categoria.toLowerCase().includes(this.categoriaF.toLowerCase());
        // return startup.localizacao.toLowerCase().includes(this.filtroCid.toLowerCase()) && startup.qtdFuncionarios > this.filtroQtd;
      })),
    );
  }
  limparFiltros(){
    this.filtroCid = '';
    this.locafizacaoForm.reset();
    this.filtroQtd = 0;
    this.qtdForm.reset();
    this.categoriaF = '';
    this.categoriaForm.reset();
    this.refresh()
  }
  
  mudarCategoria(value: string){
    this.categoriaF = value
    if (this.categoriaF == 'Selecione'){
      this.categoriaF = ''
    }
    this.refresh()
  }
  filtrarCidade(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.filtroCid = filterValue
    this.refresh()
  }
  filtrarQtd(event: any){
    this.filtroQtd = parseInt(event.value)
    console.log("aa", this.filtroQtd)
    this.refresh()
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

  async pegar(id: string){
    this.startupService.setIdDetail(id)
  }
}
