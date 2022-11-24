import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociacaoRoutingModule } from './associacao-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './presentation/templates/header/header.component';
import { FooterComponent } from './presentation/templates/footer/footer.component';
import { MenuComponent } from './presentation/templates/layout/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { HomeComponent } from './presentation/pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AssociacaoRoutingModule,
    SharedModule
  ]
})
export class AssociacaoModule { 
  constructor(){
    console.log("AssociacaoModule")
  }
}
