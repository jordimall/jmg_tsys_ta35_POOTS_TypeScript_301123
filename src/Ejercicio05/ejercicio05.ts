import { Espectador } from "./models/Espectador";
import { Pelicula } from "./models/Pelicula";
import { Cine } from "./models/Cine";

let cine = new Cine(8, 4.5, new Pelicula("pelicula", 160, 16, "director"));

const crearCine = (): void => {
    for (let index: number = 0; index < 30; index++) {
        let columna: number = Math.floor(Math.random() * 9);
        let fila: number = Math.floor(Math.random() * 8);
        let espectador: Espectador = new Espectador(
            `nombre ${index}`,
            Math.floor(Math.random() * (40 - 16 + 1) + 16),
            Math.random() * 10,
        );

        if (!cine.estaLibre(fila, columna) && cine.puedeEntrar(espectador)) {
            cine.sentar(fila, columna, espectador);
        }
    }
};

export const ejercicio5 = (): void => {
    crearCine();
    cine.showPrint();
};
