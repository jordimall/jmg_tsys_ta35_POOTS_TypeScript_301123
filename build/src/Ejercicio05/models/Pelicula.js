"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
class Pelicula {
    titulo;
    duracion;
    edadMinima;
    director;
    constructor(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    getTitulo = () => {
        return this.titulo;
    };
    getDuracion = () => {
        return this.duracion;
    };
    getEdadMinima = () => {
        return this.edadMinima;
    };
    getDirector = () => {
        return this.director;
    };
    toString = () => {
        return `La pelicula con ${this.titulo}, del director ${this.director}, tiene una duración de ${this.duracion} minutos y la edad minima recomendada es de ${this.edadMinima} años`;
    };
}
exports.Pelicula = Pelicula;
