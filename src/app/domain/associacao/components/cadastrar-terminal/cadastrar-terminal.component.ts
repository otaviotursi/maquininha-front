import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-terminal',
  templateUrl: './cadastrar-terminal.component.html',
  styleUrls: ['./cadastrar-terminal.component.scss']
})
export class CadastrarTerminalComponent implements OnInit {
  statusResponse = "teste status";
  titulo = "Autorizar Terminal";
  pagamentoUrl = "/";
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
