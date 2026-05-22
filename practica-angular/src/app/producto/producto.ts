import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Cuenta } from "../cuenta/cuenta";

@Component(
    {
        selector: "mi-prodcuto",
        templateUrl: "producto.html",
        styleUrl: "producto.css",
        imports: [Pelicula]
    }
)
export class Producto {
    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;
    public mostrar_peliculas: boolean = true;


    constructor() {
        this.nombre = "pc portatil";
        this.marca = "Acer";
        this.precio = 520;
        this.descripcion = "asdgnvodaskjngvodasngons";
        console.log("Se ha car");
    }

    ngOnInit() {
        console.log("on init componente")
    }

    ngDoCheck() {
        //console.log("componente actualizado")
    }

    cambiarNombre() {
        this.nombre = "Laptop Asus 177h"
    }

    ngAfterViewInit() {
        console.log("la vista esta cargada")
    }

    ocultarPeliculas(valor: boolean) {
        this.mostrar_peliculas = valor;
    }



}