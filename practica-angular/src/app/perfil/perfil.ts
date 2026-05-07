import { Component } from "@angular/core";

@Component(
    {
        selector: "mi-perfil",
        templateUrl: "perfil.html",
        styleUrl: "perfil.css"
    }
)
export class Perfil {
    constructor() {
        alert("Bienvenido al perfil, estas dentro de una aplicacion");
        console.log("Se cargó el componente de perfil correctamente");
    }
}