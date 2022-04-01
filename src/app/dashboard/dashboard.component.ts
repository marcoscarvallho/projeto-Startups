import { Component, OnInit } from '@angular/core';
import { Startup } from '../startup';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  startups: Startup[] = [];

  constructor(private startupService: StartupService) { }

  ngOnInit(): void {
    this.getStartups();
  }

  getStartups(): void {
    this.startupService.getStartups()
      .subscribe(startups => this.startups = startups.slice(0,4));
  }
}