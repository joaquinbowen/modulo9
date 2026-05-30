import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = "https://youtube.com";
  redirigir = true;

  prestamosList = [
    { id: 1, monto: 5000, estado: "Aprobado" },
    { id: 2, monto: 3500, estado: "Pendiente" },
    { id: 3, monto: 7200, estado: "Aprobado" },
    { id: 4, monto: 2100, estado: "Pendiente" },
    { id: 5, monto: 9800, estado: "Aprobado" },
    { id: 6, monto: 4300, estado: "Pendiente" }
  ];

  cambioRedireccion() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false
    }

  }
}
