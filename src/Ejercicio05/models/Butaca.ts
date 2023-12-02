import { Espectador } from "./Espectador";
export class Butaca {
    private letra: string;
    private fila: number;
    private espectador: Espectador | null = null;

    constructor(letra: string, fila: number) {
        this.letra = letra;
        this.fila = fila;
    }

    public setEspectador = (espectador: Espectador): void => {
        this.espectador = espectador;
    };

    public ocupado = (): boolean => {
        if (this.espectador === null) {
            return false;
        }
        return true;
    };

    public toString = (): string => {
        if (this.ocupado()) {
            return `Butaca ${this.fila}${this.letra} - ${this.espectador?.toString()}`;
        }

        return `Butaca ${this.fila}${this.letra} - Disponible`;
    };
}
