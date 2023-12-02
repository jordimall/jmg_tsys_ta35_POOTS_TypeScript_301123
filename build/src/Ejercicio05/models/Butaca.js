"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Butaca = void 0;
class Butaca {
    letra;
    fila;
    espectador = null;
    constructor(letra, fila) {
        this.letra = letra;
        this.fila = fila;
    }
    setEspectador = (espectador) => {
        this.espectador = espectador;
    };
    ocupado = () => {
        if (this.espectador === null) {
            return false;
        }
        return true;
    };
    toString = () => {
        if (this.ocupado()) {
            return `Butaca ${this.fila}${this.letra} - ${this.espectador?.toString()}`;
        }
        return `Butaca ${this.fila}${this.letra} - Disponible`;
    };
}
exports.Butaca = Butaca;
