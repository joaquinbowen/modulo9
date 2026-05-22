import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  ngOnInit() {
    console.log("CUENTA ARRANCANDO");
  }

  ngOnDestroy() {
    console.log("CUENTA ELIMINADO")
  }
}
