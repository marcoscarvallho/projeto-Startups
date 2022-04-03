import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupsComponent } from './startups/startups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartupDetailComponent } from './startup-detail/startup-detail.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { AddStartupComponent } from './add-startup/add-startup.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', redirectTo: '/teste', pathMatch: 'full' },
  { path: 'startup', component: StartupsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: StartupDetailComponent },
  { path: 'table', component: MatTableComponent },
  { path: 'addNew', component: AddStartupComponent },
  { path: 'teste', component: TabelaComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }