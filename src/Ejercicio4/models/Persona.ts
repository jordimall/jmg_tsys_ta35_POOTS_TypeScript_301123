export class Persona {
    protected nombre: string;
    protected edad: number;
    protected sexo: string;

    constructor(nombre: string, edad: number, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = this.comprobarSexo(sexo);
    }

    public getNombre = () => {
        return this.nombre;
    };

    public getEdad = () => {
        return this.edad;
    };

    public getSexo = () => {
        return this.sexo;
    };

    public comprobarSexo = (text: string): string => {
        if (["H", "M"].includes(text)) {
            return text;
        }
        return "H";
    };
}
