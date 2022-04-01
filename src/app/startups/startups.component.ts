import { Component, OnInit } from '@angular/core';
import { Startup } from '../startup';
import { StartupService } from '../startup.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  selectedStartup?: Startup;
  startups: Startup[] = [];
  constructor(private startupService: StartupService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getStartups();
  }
  onSelect(startup: Startup): void {
    this.selectedStartup = startup;
  }
  getStartups(): void {
    this.startupService.getStartups()
      .subscribe(startups => this.startups = startups)
  }
}