import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cadeiras:string ="assets/img/home/items/cadeiras.png"
  mesas:string ="assets/img/home/items/mesas.png"
  sofa:string ="assets/img/home/items/sofa.png"
  poltrona:string ="assets/img/home/items/poltrona.png"

  // Carroussel

  carrossel1:string ="assets/img/home/carrossel/carrossel1.png"
  carrossel2:string ="assets/img/home/carrossel/carrossel2.png"
  


}
