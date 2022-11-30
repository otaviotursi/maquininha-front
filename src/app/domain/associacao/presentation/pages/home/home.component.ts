import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titulo = "Opções Disponiveis"
  constructor(){
    console.log("HomeComponent")
  }

  ngOnInit(): void {
  }

}
