import { Raices } from "./models/Raices";

const ecuacion1 = new Raices(5, 6, 0);

const ecuacion2 = new Raices(1, 2, 1);

const ecuacion3 = new Raices(1, 1, 1);

export const ejercicio3 = (): void => {
    console.log(`Primera ecuación de 2º grado con los siguientes valores ${ecuacion1.toString()}`)
    console.log(`¿Tiene raíces? ${ecuacion1.tieneRaices()}`);
    console.log(`¿Tiene raíz única? ${ecuacion1.tieneRaiz()}`);
    ecuacion1.calcular();

    console.log(`\n Seguna ecuación de 2º grado con los siguientes valores ${ecuacion2.toString()}`)
    console.log(`¿Tiene raíces? ${ecuacion2.tieneRaices()}`);
    console.log(`¿Tiene raíz única? ${ecuacion2.tieneRaiz()}`);
    ecuacion2.calcular();

    console.log(`\n ultima ecuación de 2º grado con los siguientes valores ${ecuacion3.toString()}`)
    console.log(`¿Tiene raíces? ${ecuacion3.tieneRaices()}`);
    console.log(`¿Tiene raíz única? ${ecuacion3.tieneRaiz()}`);
    ecuacion3.calcular();
};
