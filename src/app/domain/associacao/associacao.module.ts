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
import { AutorizarTerminalComponent } from './components/autorizar-terminal/autorizar-terminal.component';
import { CadastrarTerminalComponent } from './components/cadastrar-terminal/cadastrar-terminal.component';
import { RealizarTransacaoComponent } from './components/realizar-transacao/realizar-transacao.component';
import { ComprovanteTransacaoComponent } from './components/comprovante-transacao/comprovante-transacao.component';
import { CancelarTransacaoComponent } from './components/cancelar-transacao/cancelar-transacao.component';
import { PagamentoDebitoComponent } from './components/pagamento-debito/pagamento-debito.component';
import { PagamentoCreditoComponent } from './components/pagamento-credito/pagamento-credito.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    HomeComponent,
    AutorizarTerminalComponent,
    CadastrarTerminalComponent,
    RealizarTransacaoComponent,
    ComprovanteTransacaoComponent,
    CancelarTransacaoComponent,
    PagamentoDebitoComponent,
    PagamentoCreditoComponent,
  ],
  imports: [
    CommonModule,
    AssociacaoRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),

  ]
})
export class AssociacaoModule { 
  constructor(){
    console.log("AssociacaoModule")
  }
}
