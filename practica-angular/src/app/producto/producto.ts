import { Component } from "@angular/core";

@Component(
    {
        selector: "mi-prodcuto",
        templateUrl: "producto.html",
        styleUrl: "producto.css"
    }
)
export class Producto {
    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;


    constructor() {
        this.nombre = "pc portatil";
        this.marca = "Acer";
        this.precio = 520;
        this.descripcion = "asdgnvodaskjngvodasngons";
        console.log("Se ha car");
    }
}