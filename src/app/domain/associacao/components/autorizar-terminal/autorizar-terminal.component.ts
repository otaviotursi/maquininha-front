import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizar-terminal',
  templateUrl: './autorizar-terminal.component.html',
  styleUrls: ['./autorizar-terminal.component.scss']
})
export class AutorizarTerminalComponent implements OnInit {
  statusResponse = "teste status";
  chaveAcesso = "chave acesso";
  titulo = "Autorizar Terminal";
  pagamentoUrl = "/cadastrarterminal";
  form?: any;
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  AutorizarTerminal(){
    this.router.navigateByUrl(this.pagamentoUrl);
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
