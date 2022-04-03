import { Component, Input, OnInit } from '@angular/core';
import { Startup } from '../startup';import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-startup-detail',
  templateUrl: './startup-detail.component.html',
  styleUrls: ['./startup-detail.component.css']
})
export class StartupDetailComponent implements OnInit {
  @Input() startup?: Startup;
  constructor(
    private route: ActivatedRoute,
    private startupService: StartupService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStartups();
  }
  
  getStartups(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.startupService.getStartup(id)
    //   .subscribe(startup => this.startup = startup);
  }
  goBack(): void {
    this.location.back();
  }
}
