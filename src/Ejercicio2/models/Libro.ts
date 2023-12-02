export class Libro {
    private ISBN: string;
    private titulo: string;
    private autor: string;
    private numPaginas: number;

    constructor(
        ISBN: string,
        titulo: string,
        autor: string,
        numPaginas: number,
    ) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    getISBN(): string {
        return this.ISBN;
    }

    setISBN(ISBN: string): void {
        this.ISBN = ISBN;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getNumPaginas(): number {
        return this.numPaginas;
    }

    setNumPaginas(numPaginas: number): void {
        this.numPaginas = numPaginas;
    }

    toString(): string {
        return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}
