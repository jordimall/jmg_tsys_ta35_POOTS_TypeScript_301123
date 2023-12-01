export class Raices {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDiscriminante = (): number => {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    };

    public tieneRaices = (): boolean => {
        return this.getDiscriminante() > 0;
    };

    public tieneRaiz = (): boolean => {
        return this.getDiscriminante() === 0;
    };

    public calcular = (): void => {
        const discriminante: number = this.getDiscriminante();

        if (discriminante > 0) {
            this.obtenerRaices(discriminante);
        } else if (discriminante === 0) {
            this.obtenerRaiz(discriminante);
        } else {
            console.log("La ecuación no tiene soluciones reales.");
        }
    };

    private obtenerRaices = (discriminante: number): void => {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`Las raíces son: ${raiz1} y ${raiz2}`);
    };

    private obtenerRaiz = (discriminante: number): void => {
        const raiz = (-this.b + discriminante) / (2 * this.a);
        console.log(`La única raíz es: ${raiz}`);
    };

    public toString = (): string => {
        return `a=${this.a}, b=${this.b} y c=${this.c}`;
    };
}
