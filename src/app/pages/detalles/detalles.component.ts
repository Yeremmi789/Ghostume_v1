import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../productos/productosLocal';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute //obtener datos del producto por el id
  ) {}

  datos: any;
  productoSeleccionado: any; // Debes definir el tipo adecuado para tus productos

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const prodId = +params['id']; // Obtener el id del producto desde la URL
      // Lógica para buscar el producto en los tres arreglos
      this.productoSeleccionado = this.obtenerProductoPorId(prodId);
    });
  }

  // getItems(): Image[] {
  //   return this.items;
  // }

  // getKids(): Image[] {
  //   return this.kids;
  // }

  // getMan(): Image[] {
  //   return this.man;
  // }

  obtenerProductoPorId(id: number): any {
    const producto = this.items.find((item) => item.id === id);
    if (producto) return producto;

    const productoKid = this.kids.find((kid) => kid.id === id);
    if (productoKid) return productoKid;

    const productoMan = this.man.find((man) => man.id === id);
    return productoMan;
  }

  // CARRUSEL INFINITO

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

  items: Image[] = [
    // items: = [
    {
      id: 1,
      titulo: 'Disfraz para mujer Raving Mad Hatter',
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      // precio: 500,
      imagen: 'assets/img/disfras1.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
    {
      id: 2,
      titulo: 'Vestido azul a cuadros',
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      // precio: 1500,
      imagen: 'assets/img/disfras2.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
    {
      id: 3,
      titulo: 'Santa Claus',
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      // precio: 1500,
      imagen: 'assets/img/disfras3.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
    {
      id: 4,
      titulo: 'Wicked Wicked Witch',
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      // precio: 1500,
      imagen: 'assets/img/disfras4.jpg',
      categoria: 'Mujer',
      tipo: 'Sexys',
    },
  ];

  kids: Image[] = [
    // items: = [
    {
      id: 5,
      titulo: 'Parca oscura',
      imagen: 'assets/img/disfras5.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id: 6,
      titulo: 'Disfraz de mago',
      imagen: 'assets/img/disfras6.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id: 7,
      titulo: 'Disfraz de espectro',
      imagen: 'assets/img/disfras7.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id: 8,
      titulo: 'Disfraz de diablo',
      imagen: 'assets/img/disfras8.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
  ];

  man: Image[] = [
    // items: = [
    {
      id: 9,
      titulo: 'Sombrerero Loco',
      imagen: 'assets/img/disfras9.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id: 10,
      titulo: 'Disfraz de Faraón ',
      imagen: 'assets/img/disfras10.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id: 12,
      titulo: 'Disfraz de Barba Negra',
      imagen: 'assets/img/disfras11.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
    {
      id: 12,
      titulo: 'Doctor de la peste negra',
      imagen: 'assets/img/disfras13.jpg',
      categoria: 'Niños',
      tipo: 'infantil',
    },
  ];
}
