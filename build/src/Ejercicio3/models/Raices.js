"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raices = void 0;
class Raices {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminante = () => {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    };
    tieneRaices = () => {
        return this.getDiscriminante() > 0;
    };
    tieneRaiz = () => {
        return this.getDiscriminante() === 0;
    };
    calcular = () => {
        const discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            this.obtenerRaices(discriminante);
        }
        else if (discriminante === 0) {
            this.obtenerRaiz(discriminante);
        }
        else {
            console.log("La ecuación no tiene soluciones reales.");
        }
    };
    obtenerRaices = (discriminante) => {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`Las raíces son: ${raiz1} y ${raiz2}`);
    };
    obtenerRaiz = (discriminante) => {
        const raiz = (-this.b + discriminante) / (2 * this.a);
        console.log(`La única raíz es: ${raiz}`);
    };
    toString = () => {
        return `a=${this.a}, b=${this.b} y c=${this.c}`;
    };
}
exports.Raices = Raices;
