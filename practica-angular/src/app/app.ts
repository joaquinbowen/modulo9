import { Component, signal } from '@angular/core';
import { Prestamos } from './prestamos/prestamos';

//import { Perfil } from "./perfil/perfil";
//import { Producto } from "./producto/producto";
//import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de practica ');
}
