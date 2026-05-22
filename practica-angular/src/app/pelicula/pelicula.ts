import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  ngOnInit() {
    console.log("Pelicula ARRANCANDO");
  }

  ngOnDestroy() {
    console.log("Pelicula ELIMINADO")
  }
}
