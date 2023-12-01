import { Persona } from "./Persona";

export class Estudiante extends Persona {
    private calificacionActual: number;

    constructor(
        nombre: string,
        edad: number,
        sexo: string,
        calificacionActual: number,
    ) {
        super(nombre, edad, sexo);
        this.edad = this.compovarEdad(edad);
        this.calificacionActual =
            this.comprobarCalificacion(calificacionActual);
    }

    public getCalificacionActual = (): number => {
        return this.calificacionActual;
    };

    public getSexo=():string=>{
        return this.sexo;
    }

    public faltar = (): boolean => {
        if (Math.random() > 0.5) {
            return true;
        }

        return false;
    };

    public estaAprobado = (): boolean => {
        return this.calificacionActual >= 5.0;
    };

    private compovarEdad = (num: number): number => {
        if (num > 80) {
            return 80;
        }
        return num;
    };

    private comprobarCalificacion = (num: number): number => {
        if (num > 10) {
            return 10;
        }

        if (num < 0) {
            return 0;
        }

        return num;
    };

    public getCalificacionFormateada = (): string => {
        let calificacionRedondeada: number =
            Math.round(this.calificacionActual * 1000) / 1000;
        return calificacionRedondeada.toFixed(2);
    };
}
