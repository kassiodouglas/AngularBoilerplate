import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './pages/me/me.component';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'configuracoes', pathMatch: 'full' },
  { path: 'configuracoes', component: MeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
