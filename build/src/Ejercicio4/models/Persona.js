"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = this.comprobarSexo(sexo);
    }
    getNombre = () => {
        return this.nombre;
    };
    getEdad = () => {
        return this.edad;
    };
    getSexo = () => {
        return this.sexo;
    };
    comprobarSexo = (text) => {
        if (["H", "M"].includes(text)) {
            return text;
        }
        return "H";
    };
}
exports.Persona = Persona;
