import { Profesor } from "./models/Profesor";
import { Estudiante } from "./models/Estudiante";
import { Aula } from "./models/Aula";

const profesor = new Profesor("Profesor", 20, "M", "Física");
const aula = new Aula(1, 30, "Física", profesor);

for (let i = 0; i < aula.getNumMaxEstudiantes(); i++) {
    let sexo: string;
    if (Math.random() > 0.5) {
        sexo = "H";
    } else {
        sexo = "M";
    }

    const estudiante = new Estudiante(
        `${i + 1} estudiante`,
        Math.floor(Math.random() * 18) + 15,
        sexo,
        Math.floor(Math.random() * 10),
    );

    aula.agregarEstudiante(estudiante);
}

export const ejercicio4 = (): void => {
    aula.mostrarAula();
};
