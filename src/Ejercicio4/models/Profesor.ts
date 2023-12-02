import { Persona } from "./Persona";

export class Profesor extends Persona {
    private materia: string;

    constructor(nombre: string, edad: number, sexo: string, materia: string) {
        super(nombre, edad, sexo);
        this.materia = this.comprobarMateria(materia);
    }

    public getMateria = (): string => {
        return this.materia;
    };

    private comprobarMateria = (text: string): string => {
        if (!["matemáticas", "filosofía", "física"].includes(text.toLowerCase()))
            return "matemáticas";
        return text;
    };

    public faltar = (): boolean => {
        if (Math.random() > 0.2) {
            return true;
        }
        return false;
    };
}
