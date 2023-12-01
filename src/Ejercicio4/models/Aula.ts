import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

export class Aula {
    private id: number;
    private numMaxEstudiantes: number;
    private materiaDestinada: string;
    private estudiantes: Estudiante[];
    private profesor: Profesor;

    constructor(
        id: number,
        numMaxEstudiantes: number,
        materiaDestinada: string,
        profesor: Profesor,
    ) {
        this.id = id;
        this.numMaxEstudiantes = numMaxEstudiantes;
        this.materiaDestinada = materiaDestinada;
        this.profesor = profesor;
        this.estudiantes = [];
    }

    public getNumMaxEstudiantes = (): number => {
        return this.numMaxEstudiantes;
    };

    private puedeDarseClase(): boolean {
        const porcentajeEstudiantes =
            (this.estudiantes.length / this.numMaxEstudiantes) * 100;

        return (
            this.profesor.faltar() &&
            this.profesor.getMateria() === this.materiaDestinada &&
            porcentajeEstudiantes > 50
        );
    }

    public mostrarAula = (): void => {
        if (this.puedeDarseClase()) {
            console.log(`En el aula ${this.id} se dara la clase de ${this.materiaDestinada}, impartida por ${this.profesor.getNombre()}`);

            const estudiantesAprobados = this.estudiantes.filter(
                estudiante => estudiante.getCalificacionActual() >= 5,
            );

            const hombresAprobados = estudiantesAprobados.filter(
                estudiante => estudiante.getSexo() === "H",
            ).length;

            const mujeresAprobadas = estudiantesAprobados.filter(
                estudiante => estudiante.getSexo() === "M",
            ).length;

            console.log(
                `El número de estudiantes aprobados: ${estudiantesAprobados.length}`,
            );
            console.log(
                `El número de estudiantes hombres aprobados son: ${hombresAprobados}`,
            );
            console.log(
                `El número de estudiantes mujeres aprobadas son: ${mujeresAprobadas}`,
            );
        } else {
            console.log(`En el aula ${this.id} no se puede dar clase.`);
        }
    };

    public agregarEstudiante = (estudiante: Estudiante): void => {
        if (this.estudiantes.length < this.numMaxEstudiantes) {
            this.estudiantes.push(estudiante);
        } else {
            console.log(`El aula está llena.`);
        }
    };
}
