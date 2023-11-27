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
    new Videojuego(1, "AOE2 Definitive Edition", "Nintendo", "Aoe2.png", 9),
    new Videojuego(2, "Fifa 2023", "Konami", "Fifa23.jpeg", 7),
    new Videojuego(3, "Call of duty Modern Warfare 3", "Microsoft", "CallOfDuty.png", 7),
    new Videojuego(4, "Animal crossing", "Microsoft", "AnimalCrossing.jpeg", 5),
    new Videojuego(5, "Fornite", "Sega", "Fornite.png", 6),
    new Videojuego(6, "Red Dead Redemption 2", "Rockstar Studios", "RDR3.png", 9),
    new Videojuego(7, "Super Mario Bros", "Nintendo", "SuperMario.png", 7),
    new Videojuego(8, "Wii Sports", "Nintendo", "WiiSports.jpeg", 5),
    new Videojuego(9, "Tetris", "EA Mobile", "Tetris.jpeg", 3),
    new Videojuego(10, "Minecraft", "CD Projekt Red", "Minecraf.jpeg", 5)
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
