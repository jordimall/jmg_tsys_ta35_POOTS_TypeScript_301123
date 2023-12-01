"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const Persona_1 = require("./Persona");
class Profesor extends Persona_1.Persona {
    materia;
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = this.comprobarMateria(materia);
    }
    getMateria = () => {
        return this.materia;
    };
    comprobarMateria = (text) => {
        if (!["matemáticas", "filosofía", "física"].includes(text.toLowerCase()))
            return "matemáticas";
        return text;
    };
    faltar = () => {
        if (Math.random() > 0.2) {
            return true;
        }
        return false;
    };
}
exports.Profesor = Profesor;
