import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Startup } from '../startup';
import { STARTUPS } from '../startup-testes';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-add-startup',
  templateUrl: './add-startup.component.html',
  styleUrls: ['./add-startup.component.css']
})
export class AddStartupComponent implements OnInit {
  startup = STARTUPS;
  clickMessage = '';
  categorias: string[] = ['Seed Stage', 'Angel Investors', 'Early Stage', 'Series A', 'Series B', 'Series C', 'Mezzanine']

  onClickMe(nome: string, qtdFuncionarios: string, industria: string, localizacao: string, rank: string, descricao: string) {
    this.startup[STARTUPS.length-1].id = STARTUPS.length+1
    this.startup[STARTUPS.length-1].name = nome
    this.startup[STARTUPS.length-1].qtdFuncionarios = 500
    this.startup[STARTUPS.length-1].industria = industria
    this.startup[STARTUPS.length-1].localizacao = localizacao
    this.startup[STARTUPS.length-1].rank = 30
    this.startup[STARTUPS.length-1].descricao = descricao
    this.startup[STARTUPS.length-1].categoria = 'Seed Stage'
    console.log(this.startup[STARTUPS.length-1])
    STARTUPS.push(this.startup[STARTUPS.length-1]);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
