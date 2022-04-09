import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Startup } from '../startup';
import { STARTUPS } from '../startup-testes';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-add-startup',
  templateUrl: './add-startup.component.html',
  styleUrls: ['./add-startup.component.css']
})
export class AddStartupComponent implements OnInit {
  startup = STARTUPS;
  clickMessage = '';
  categoriaF = '';
  categorias: string[] = ['Seed Stage', 'Angel Investors', 'Early Stage', 'Series A', 'Series B', 'Series C', 'Mezzanine']
  
  onClickMe(nome: string, qtdFuncionarios: string, industria: string, localizacao: string, rank: string, descricao: string) {
    var parseQtd = Number(qtdFuncionarios);
    var parseRank = Number(rank);
    var eachProduct = 
      {
          "nome": nome,
          "qtdFuncionarios": parseQtd,
          "industria": industria,
          "localizacao":localizacao,
          "descricao": descricao,
          "rank":parseRank,
      }
      // var json = JSON.parse(JSON.stringify(eachProduct))
      this.startupService.createStartup(eachProduct);
    
  }
  mudarCategoria(value: string){
    this.categoriaF = value
    console.log(value)
  }
  constructor(private startupService: StartupService) { }

  ngOnInit(): void {
  }

}
