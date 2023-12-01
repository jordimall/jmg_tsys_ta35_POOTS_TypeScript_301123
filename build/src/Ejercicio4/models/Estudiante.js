"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const Persona_1 = require("./Persona");
class Estudiante extends Persona_1.Persona {
    calificacionActual;
    constructor(nombre, edad, sexo, calificacionActual) {
        super(nombre, edad, sexo);
        this.edad = this.compovarEdad(edad);
        this.calificacionActual =
            this.comprobarCalificacion(calificacionActual);
    }
    getCalificacionActual = () => {
        return this.calificacionActual;
    };
    getSexo = () => {
        return this.sexo;
    };
    faltar = () => {
        if (Math.random() > 0.5) {
            return true;
        }
        return false;
    };
    estaAprobado = () => {
        return this.calificacionActual >= 5.0;
    };
    compovarEdad = (num) => {
        if (num > 80) {
            return 80;
        }
        return num;
    };
    comprobarCalificacion = (num) => {
        if (num > 10) {
            return 10;
        }
        if (num < 0) {
            return 0;
        }
        return num;
    };
    getCalificacionFormateada = () => {
        let calificacionRedondeada = Math.round(this.calificacionActual * 1000) / 1000;
        return calificacionRedondeada.toFixed(2);
    };
}
exports.Estudiante = Estudiante;
