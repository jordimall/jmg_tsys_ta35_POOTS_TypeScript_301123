"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    titulo;
    numTemporadas;
    entregado;
    genero;
    creador;
    constructor(titulo, creador) {
        this.titulo = titulo;
        this.numTemporadas = 3;
        this.entregado = false;
        this.genero = "Sin especificar";
        this.creador = creador;
    }
    getTitulo() {
        return this.titulo;
    }
    getNumTemporadas() {
        return this.numTemporadas;
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
        if (a instanceof Serie) {
            return this.numTemporadas - a.getNumTemporadas();
        }
        return 0;
    }
    toString() {
        return `Titulo de la serie: ${this.titulo}, numero de temporadas: ${this.numTemporadas}, esta entregado: ${this.entregado}, género: ${this.genero} y creador: ${this.creador}`;
    }
}
exports.Serie = Serie;
