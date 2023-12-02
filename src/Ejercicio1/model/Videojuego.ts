import { Entregable } from "../interface/Entregable";

export class Videojuego implements Entregable {
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compania: string;

    constructor(
        titulo: string,
        horasEstimadas: number,
        genero: string,
        compania: string,
    ) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compania = compania;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getHorasEstimadas(): number {
        return this.horasEstimadas;
    }

    isEntregado(): boolean {
        return this.entregado;
    }

    entregar(): void {
        this.entregado = true;
    }

    devolver(): void {
        this.entregado = false;
    }

    compareTo(a: Entregable): number {
        if (a instanceof Videojuego) {
            return this.horasEstimadas - a.getHorasEstimadas();
        }
        return 0;
    }

    toString(): string {
        return `Titulo del videojuego: ${this.titulo}, las horas estimadas: ${this.horasEstimadas}, esta entregado: ${this.entregado}, género: ${this.genero}, compañía que lo desarrollo: ${this.compania}`;
    }
}
