import { Component, signal } from '@angular/core';

import { Perfil } from "./perfil/perfil";
import { Producto } from "./producto/producto";

@Component({
  selector: 'app-root',
  imports: [Perfil, Producto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de practica ');
}
