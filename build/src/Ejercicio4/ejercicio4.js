"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicio4 = void 0;
const Profesor_1 = require("./models/Profesor");
const Estudiante_1 = require("./models/Estudiante");
const Aula_1 = require("./models/Aula");
const profesor = new Profesor_1.Profesor("Profesor", 20, "M", "Física");
const aula = new Aula_1.Aula(1, 30, "Física", profesor);
for (let i = 0; i < aula.getNumMaxEstudiantes(); i++) {
    let sexo;
    if (Math.random() > 0.5) {
        sexo = "H";
    }
    else {
        sexo = "M";
    }
    const estudiante = new Estudiante_1.Estudiante(`${i + 1} estudiante`, Math.floor(Math.random() * 18) + 15, sexo, Math.floor(Math.random() * 10));
    aula.agregarEstudiante(estudiante);
}
const ejercicio4 = () => {
    aula.mostrarAula();
};
exports.ejercicio4 = ejercicio4;
