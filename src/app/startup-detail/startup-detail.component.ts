import { Component, Input, OnInit } from '@angular/core';
import { Startup } from '../startup';import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StartupService } from '../startup.service';
import { TabelaComponent } from '../tabela/tabela.component'

@Component({
  selector: 'app-startup-detail',
  templateUrl: './startup-detail.component.html',
  styleUrls: ['./startup-detail.component.css']
})
export class StartupDetailComponent implements OnInit {
  @Input() startup?: Startup;
  public startupOn: Startup | undefined;
  constructor(
    private route: ActivatedRoute,
    private startupService: StartupService,
    private location: Location,
    private tabelaComponent: TabelaComponent
  ) {}

  ngOnInit(): void {
    this.getStartup();
  }
  
  getStartup(): void{
    //this.startupOn = this.tabelaComponent.pegar(String(this.route.snapshot.paramMap.get('id')));
    console.log('aaaaaaaa')
    // const id = Number((this.route.snapshot.paramMap.get('id'));this.startupService.searchStartupById(id).subscribe(startup => this.startup = startup);
    // const id = String(this.route.snapshot.paramMap.get('id'));
    // this.startupOn = this.startupService.searchStartupById(id)
  }
  goBack(): void {
    this.location.back();
  }
}
