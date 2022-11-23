import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { HomeComponent } from './presentation/pages/home/home.component';


const routes : Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'autorizar', component: MenuInicialComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociacaoRoutingModule{}