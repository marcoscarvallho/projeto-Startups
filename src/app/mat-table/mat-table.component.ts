import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Startup } from '../startup';
import { STARTUPS } from '../startup-testes';;
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

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

}
