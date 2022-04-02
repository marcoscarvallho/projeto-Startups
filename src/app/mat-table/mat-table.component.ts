import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Startup } from '../startup';
import { STARTUPS } from '../startup-testes';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  constructor() { }

  startups = STARTUPS;
  displayedColumns: string[] = ['name', 'qtdFuncionarios', 'industria', 'localizacao','descricao', 'rank'];
  dataSource = new MatTableDataSource<Startup>(STARTUPS);

  ngOnInit(): void {
    
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
