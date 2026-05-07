import { Component } from "@angular/core";

@Component(
    {
        selector: "mi-prodcuto",
        templateUrl: "producto.html",
        styleUrl: "producto.css"
    }
)
export class Producto {
    constructor() {
        console.log("Se ha car");
    }
}