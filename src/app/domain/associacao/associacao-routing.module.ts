import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizarTerminalComponent } from './components/autorizar-terminal/autorizar-terminal.component';
import { CadastrarTerminalComponent } from './components/cadastrar-terminal/cadastrar-terminal.component';
import { CancelarTransacaoComponent } from './components/cancelar-transacao/cancelar-transacao.component';
import { ComprovanteTransacaoComponent } from './components/comprovante-transacao/comprovante-transacao.component';
import { PagamentoCreditoComponent } from './components/pagamento-credito/pagamento-credito.component';
import { PagamentoDebitoComponent } from './components/pagamento-debito/pagamento-debito.component';
import { RealizarTransacaoComponent } from './components/realizar-transacao/realizar-transacao.component';
import { HomeComponent } from './presentation/pages/home/home.component';
const routes : Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'autorizarterminal', 
    component: AutorizarTerminalComponent,
  },
  {
    path: 'cadastrarterminal', 
    component: CadastrarTerminalComponent,
  },
  {
    path: 'realizartransacao', 
    component: RealizarTransacaoComponent,
  },
  {
    path: 'comprovantetransacao', 
    component: ComprovanteTransacaoComponent,
  },
  {
    path: 'cancelartransacao', 
    component: CancelarTransacaoComponent,
  },
  {
    path: 'pagamentodebito', 
    component: PagamentoDebitoComponent,
  },
  {
    path: 'pagamentocredito', 
    component: PagamentoCreditoComponent,
  }

  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociacaoRoutingModule{
  constructor(){
    console.log("AssociacaoRoutingModule")
  }
}