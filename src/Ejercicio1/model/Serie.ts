import { Entregable } from "../interface/Entregable";

export class Serie implements Entregable {
    private titulo: string;
    private numTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor(titulo: string, creador: string) {
        this.titulo = titulo;
        this.numTemporadas = 3;
        this.entregado = false;
        this.genero = "Sin especificar";
        this.creador = creador;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getNumTemporadas(): number {
        return this.numTemporadas;
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
        if (a instanceof Serie) {
            return this.numTemporadas - a.getNumTemporadas();
        }
        return 0;
    }

    toString(): string {
        return `Titulo de la serie: ${this.titulo}, numero de temporadas: ${this.numTemporadas}, esta entregado: ${this.entregado}, género: ${this.genero} y creador: ${this.creador}`;
    }
}
