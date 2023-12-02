"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicio5 = void 0;
const Espectador_1 = require("./models/Espectador");
const Pelicula_1 = require("./models/Pelicula");
const Cine_1 = require("./models/Cine");
let cine = new Cine_1.Cine(8, 4.5, new Pelicula_1.Pelicula("pelicula", 160, 16, "director"));
const crearCine = () => {
    for (let index = 0; index < 30; index++) {
        let columna = Math.floor(Math.random() * 9);
        let fila = Math.floor(Math.random() * 8);
        let espectador = new Espectador_1.Espectador(`nombre ${index}`, Math.floor(Math.random() * (40 - 16 + 1) + 16), Math.random() * 10);
        if (!cine.estaLibre(fila, columna) && cine.puedeEntrar(espectador)) {
            cine.sentar(fila, columna, espectador);
        }
    }
};
const ejercicio5 = () => {
    crearCine();
    cine.showPrint();
};
exports.ejercicio5 = ejercicio5;
