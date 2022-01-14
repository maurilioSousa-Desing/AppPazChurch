import { MembroSearchComponent } from './membro-search/membro-search.component';
import { MembroCreateComponent } from './membro-create/membro-create.component';
import { MembroListComponent } from './membro-list/membro-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', redirectTo: 'membros', pathMatch: 'full'
},{
  path: 'membros', component: MembroListComponent
},{
  path: 'criar', component: MembroCreateComponent
},
{
  path: 'pesquisar', component: MembroSearchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
