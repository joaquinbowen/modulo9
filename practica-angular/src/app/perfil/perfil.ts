import { Component } from "@angular/core";

@Component(
    {
        selector: "mi-perfil",
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
}