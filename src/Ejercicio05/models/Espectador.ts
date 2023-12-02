export class Espectador {
    private nombre: string;
    private edad: number;
    private dinero: number;

    constructor(nombre: string, edad: number, dinero: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }

    public getNombre = (): string => {
        return this.nombre;
    };

    public getEdad = (): number => {
        return this.edad;
    };

    public getDinero = (): number => {
        return this.dinero;
    };

    public pay = (precio: number) => {
        this.dinero -= precio;
    };

    public tieneEdad = (edadMinima: number): boolean => {
        return this.edad >= edadMinima;
    };

    public tieneDinero = (precioEntrada: number): boolean => {
        return this.dinero >= precioEntrada;
    };

    public toString = (): string => {
        return `${this.nombre} tiene ${
            this.edad
        } años y su saldo esde ${this.dinero.toFixed(2)}€`;
    };
}
