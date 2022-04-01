import { Injectable } from '@angular/core';
import { Startup } from './startup';
import { STARTUPS } from './startup-testes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  getStartups(): Observable<Startup[]> {
    const startups = of(STARTUPS);
    this.messageService.add('StartupService: fetched startups');
    return startups;
  }
  getStartup(id: number): Observable<Startup> {
    const startup = STARTUPS.find(h => h.id === id)!;
    this.messageService.add(`StartupService: fetched startup id=${id}`);
    return of(startup);
  }

  constructor(private messageService: MessageService) { }
  
}