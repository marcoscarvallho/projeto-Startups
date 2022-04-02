import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Startup } from '../startup';

import { STARTUPS } from '../startup-testes';;
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  constructor() { }
  controleAutoComplete = new FormControl();
  startups = STARTUPS;
  startup: Startup[] = [];
  filteredOptions: Observable<Startup[]> | undefined;
  displayedColumns: string[] = ['name', 'qtdFuncionarios', 'industria', 'localizacao','descricao', 'rank'];
  dataSource = new MatTableDataSource<Startup>(STARTUPS);

 
  ngOnInit() {
    this.filteredOptions = this.controleAutoComplete.valueChanges.pipe(startWith(''),
      map(value => (typeof value === 'string' ? value : value.localizacao)),
      map(localizacao => (localizacao ? this._filter(localizacao) : this.startups.slice())),
    );
  }
  displayFn(startup: string): string {
    return startup;
  }
  private _filter(localizacao: string): Startup[] {
    const filterValue = localizacao.toLowerCase();
    return this.startups.filter(startup => startup.localizacao.toLowerCase().includes(filterValue));
  }

  

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    

    return value;
  }
}
