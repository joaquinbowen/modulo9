import { Component } from "@angular/core";
import { Cuenta } from "../cuenta/cuenta";
import { Transacciones } from "../transacciones/transacciones";
import { Prestamos } from "../prestamos/prestamos";

@Component(
    {
        selector: "mi-perfil",
        imports: [Cuenta, Transacciones, Prestamos],
        templateUrl: "perfil.html",
        styleUrl: "perfil.css"
    }
)
export class Perfil {
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;


    constructor() {
        //alert("Bienvenido al perfil, estas dentro de una aplicacion");
        //console.log("Se cargó el componente de perfil correctamente");
        this.nombre = "David";
        this.edad = 18;
        this.ocupacion = "Tester";
        this.direccion = "Fajardo";
        this.telefono = "0995531186";
    }

    ngDoCheck() {
        console.log("Componente actualizado ")
    }

    cambiarEdad() {
        this.edad = 100
    }

    cambiarDireccion() {
        this.direccion = "Calle A"
    }


}