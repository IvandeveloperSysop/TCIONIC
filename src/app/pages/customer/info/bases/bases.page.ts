import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.page.html',
  styleUrls: ['./bases.page.scss'],
})
export class BasesPage implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  products = [
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'AGUA MINERAL NR', 'cantidad' : '600 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'AGUA MINERAL NR', 'cantidad' : '1.5L NR'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER LEMON LIME', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER PINEAPPLE', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER STRAWBERRY GUAVA', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER MANGO', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'TWIST TORONJA', 'cantidad' : '600 ML '},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'TWIST LIMON', 'cantidad' : '600 ML '},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'SANGRIA', 'cantidad' : '600 ML'},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'SANGRIA LIGHT', 'cantidad' : '600 ML'}

  ];


  premios = [
    {'name':'70 Asadores Char Broil con branding edición especial.'},
    {'name':'35 Hieleras Coleman 52qt  edición especial.'},
    {'name':'400 Kits utensilios para hacer tu carne asada.'},
    {'name':'150 Kit Sales de Rub con 6 piezas marca SMP.'},
    {'name':'1,200 Tarjetas virtuales de Amazon con valor de $100 pesos.'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
