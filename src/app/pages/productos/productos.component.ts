import { Component } from '@angular/core';
import { Image } from './productosLocal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  constructor (private router:Router){

  }

  prod_detalles(prod_id:number){
    this.router.navigate(['/Detalles', prod_id]);
  }

  items: Image[] = [
    {
      id: 1,
      titulo: 'Disfraz para mujer Raving Mad Hatter',
      imagen: 'assets/img/disfras1.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
    {
      id:2,
      titulo: 'Vestido azul a cuadros',
      imagen: 'assets/img/disfras2.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
    {
      id:3,
      titulo: 'Santa Claus',
      imagen: 'assets/img/disfras3.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
    {
      id:4,
      titulo: 'Wicked Wicked Witch',
      imagen: 'assets/img/disfras4.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
  ];

  // -------------------------------- CARRUSELES -------------------------------- //

  slideIndex: number = 0;
  // CARRUSEL FINITO
  // prevSlide() {
  //   if (this.slideIndex > 0) {
  //     this.slideIndex--;
  //   }
  // }

  // nextSlide() {
  //   if (this.slideIndex < this.items.length - 1) {
  //     this.slideIndex++;
  //   }
  // }
  // CARRUSEL FINITO

  // CARRUSEL INFINITO
  prevSlide() {
    this.slideIndex =
      (this.slideIndex - 1 + this.items.length) % this.items.length;
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.items.length;
  }

  productoIndex: number = 0; // Índice del producto actual

  prevProducto() {
    if (this.productoIndex > 0) {
      this.productoIndex--;
    }
  }

  nextProducto() {
    if (this.productoIndex < this.items.length - 1) {
      this.productoIndex++;
    }
  }
  // CARRUSEL INFINITO
  // -------------------------------- CARRUSELES -------------------------------- //

  kids: Image[] = [
    // items: = [
    {
      id:5,
      titulo: 'Parca oscura',
      imagen: 'assets/img/disfras5.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id:6,
      titulo: 'Disfraz de mago',
      imagen: 'assets/img/disfras6.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id:7,
      titulo: 'Disfraz de espectro',
      imagen: 'assets/img/disfras7.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id:8,
      titulo: 'Disfraz de diablo',
      imagen: 'assets/img/disfras8.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
  ];

  man: Image[] = [
    {
      id:9,
      titulo: 'Sombrerero Loco',
      imagen: 'assets/img/disfras9.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id:10,
      titulo: 'Disfraz de Faraón ',
      imagen: 'assets/img/disfras10.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id:12,
      titulo: 'Disfraz de Barba Negra',
      imagen: 'assets/img/disfras11.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id:12,
      titulo: 'Doctor de la peste negra',
      imagen: 'assets/img/disfras13.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
  ];
}
