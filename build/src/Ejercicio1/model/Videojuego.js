"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videojuego = void 0;
class Videojuego {
    titulo;
    horasEstimadas;
    entregado;
    genero;
    compania;
    constructor(titulo, horasEstimadas, genero, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compania = compania;
    }
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    isEntregado() {
        return this.entregado;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    compareTo(a) {
        if (a instanceof Videojuego) {
            return this.horasEstimadas - a.getHorasEstimadas();
        }
        return 0;
    }
    toString() {
        return `Titulo del videojuego: ${this.titulo}, las horas estimadas: ${this.horasEstimadas}, esta entregado: ${this.entregado}, género: ${this.genero}, compañía que lo desarrollo: ${this.compania}`;
    }
}
exports.Videojuego = Videojuego;
