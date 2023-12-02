import { Butaca } from "./Butaca";
import { Espectador } from "./Espectador";
import { Pelicula } from "./Pelicula";

export class Cine {
    private butacas: Butaca[][];
    private precio: number;
    private pelicula: Pelicula;

    constructor(numFilas: number, precio: number, pelicula: Pelicula) {
        this.butacas = [];
        this.precio = precio;
        this.pelicula = pelicula;
        this.createButacas(numFilas);
    }

    public getButacas = (): Butaca[][] => {
        return this.butacas;
    };

    public setButacas = (butacas: Butaca[][]): void => {
        this.butacas = butacas;
    };

    public getPrecio = (): number => {
        return this.precio;
    };

    public getPelicula = (): Pelicula => {
        return this.pelicula;
    };

    private createButacas = (numFilas: number): void => {
        for (let fila: number = 1; fila <= numFilas; fila++) {
            const filaAsientos: Butaca[] = [];

            for (
                let columna = "A";
                columna <= "I";
                columna = String.fromCharCode(columna.charCodeAt(0) + 1)
            ) {
                filaAsientos.push(new Butaca(columna, fila));
            }

            this.butacas.push(filaAsientos);
        }
    };

    private getButaca = (fila: number, columna: number): Butaca => {
        return this.butacas[fila][columna];
    };

    public estaLibre = (fila: number, columna: number): boolean => {
        return this.getButaca(fila, columna).ocupado();
    };

    public puedeEntrar = (espectador: Espectador): boolean => {
        return (
            espectador.tieneDinero(this.precio) &&
            espectador.tieneEdad(this.pelicula.getEdadMinima())
        );
    };

    public sentar = (
        fila: number,
        columna: number,
        espectador: Espectador,
    ): void => {
        this.getButaca(fila, columna).setEspectador(espectador);
    };

    public showPrint = (): void => {
        console.log(this.pelicula.toString());
        console.log(`Precio entrada: ${this.precio}€`);
        console.log();
        console.log("Butacas");
        this.butacas.map(fila => {
            fila.map(butaca => console.log(butaca.toString()));
        });
    };
}
