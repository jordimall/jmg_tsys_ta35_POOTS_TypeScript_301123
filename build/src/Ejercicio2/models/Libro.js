"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    ISBN;
    titulo;
    autor;
    numPaginas;
    constructor(ISBN, titulo, autor, numPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    getISBN() {
        return this.ISBN;
    }
    setISBN(ISBN) {
        this.ISBN = ISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    toString() {
        return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}
exports.Libro = Libro;
