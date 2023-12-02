"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espectador = void 0;
class Espectador {
    nombre;
    edad;
    dinero;
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    getNombre = () => {
        return this.nombre;
    };
    getEdad = () => {
        return this.edad;
    };
    getDinero = () => {
        return this.dinero;
    };
    pay = (precio) => {
        this.dinero -= precio;
    };
    tieneEdad = (edadMinima) => {
        return this.edad >= edadMinima;
    };
    tieneDinero = (precioEntrada) => {
        return this.dinero >= precioEntrada;
    };
    toString = () => {
        return `${this.nombre} tiene ${this.edad} años y su saldo esde ${this.dinero.toFixed(2)}€`;
    };
}
exports.Espectador = Espectador;
