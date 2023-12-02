"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
const Butaca_1 = require("./Butaca");
class Cine {
    butacas;
    precio;
    pelicula;
    constructor(numFilas, precio, pelicula) {
        this.butacas = [];
        this.precio = precio;
        this.pelicula = pelicula;
        this.createButacas(numFilas);
    }
    getButacas = () => {
        return this.butacas;
    };
    setButacas = (butacas) => {
        this.butacas = butacas;
    };
    getPrecio = () => {
        return this.precio;
    };
    getPelicula = () => {
        return this.pelicula;
    };
    createButacas = (numFilas) => {
        for (let fila = 1; fila <= numFilas; fila++) {
            const filaAsientos = [];
            for (let columna = "A"; columna <= "I"; columna = String.fromCharCode(columna.charCodeAt(0) + 1)) {
                filaAsientos.push(new Butaca_1.Butaca(columna, fila));
            }
            this.butacas.push(filaAsientos);
        }
    };
    getButaca = (fila, columna) => {
        return this.butacas[fila][columna];
    };
    estaLibre = (fila, columna) => {
        return this.getButaca(fila, columna).ocupado();
    };
    puedeEntrar = (espectador) => {
        return (espectador.tieneDinero(this.precio) &&
            espectador.tieneEdad(this.pelicula.getEdadMinima()));
    };
    sentar = (fila, columna, espectador) => {
        this.getButaca(fila, columna).setEspectador(espectador);
    };
    showPrint = () => {
        console.log(this.pelicula.toString());
        console.log(`Precio entrada: ${this.precio}€`);
        console.log();
        console.log("Butacas");
        this.butacas.map(fila => {
            fila.map(butaca => console.log(butaca.toString()));
        });
    };
}
exports.Cine = Cine;
