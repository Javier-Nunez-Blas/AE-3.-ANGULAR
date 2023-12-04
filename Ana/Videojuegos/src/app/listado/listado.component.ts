import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Añadimos los videojuegos con todos sus atributos a la clase videojuego
  videojuegos: Videojuego[] = [
    new Videojuego(1, "Animal Crossing", "Nintendo", "assets/imagenes/animal.jpg", 7),
    new Videojuego(2, "Fifa 2023", "Konami", "assets/imagenes/fifa.jpeg", 8),
    new Videojuego(3, "Final Fantasy", "Microsoft", "assets/imagenes/final.jpg", 9),
    new Videojuego(4, "Howarts", "Microsoft", "assets/imagenes/hogwarts.jpeg", 6),
    new Videojuego(5, "NBA", "Sega", "assets/imagenes/nba.png", 8),
    new Videojuego(6, "Starwars", "Rockstar Studios", "assets/imagenes/starwars.png", 7),
    new Videojuego(7, "Super Mario Bros", "Nintendo", "assets/imagenes/supermario.jpeg", 7),
    new Videojuego(8, "Zelda", "Nintendo", "assets/imagenes/zelda.jpeg", 8),
    
  ]
  // inicalizamo la variable videojuego seleccionado a null, pudiendo ser un numbre (por la id de videojuegos) o un null
  videojuegoSeleccionado: number | null = null
  // recibe el id de videojuego y cambia la id a -1, para que correspondan con los de la lista de videojuegos.
  verDetalle(id: number): void {
    this.videojuegoSeleccionado = id - 1
  }
  // cambia el estado de videojuego seleccionado a null para mostrar o no los div con *ngIf
  volver(): void {
    this.videojuegoSeleccionado = null
  }
}
// Creamos la clase videojuego con sus atrinutos y un constructor
class Videojuego {
  public idVideojuego: number
  public titulo: string
  public compania: string
  public imagen: string
  public valoracionMedia: number

  constructor(idVideojuego: number, titulo: string, compania: string, imagen: string, valoracionMedia: number) {
    this.idVideojuego = idVideojuego
    this.titulo = titulo
    this.compania = compania
    this.imagen = imagen
    this.valoracionMedia = valoracionMedia
  }

}
