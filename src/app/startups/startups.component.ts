import { Component, OnInit } from '@angular/core';
import { Startup } from '../startup';
import { StartupService } from '../startup.service';
@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  selectedStartup?: Startup;
  startups: Startup[] = [];
  constructor(private startupService: StartupService) {}

  ngOnInit(): void {
    console.log('batatadoce')
    this.startups = this.startupService.getStartups()
  }
}