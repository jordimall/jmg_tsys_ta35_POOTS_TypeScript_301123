import { Libro } from "./models/Libro";

const libro1 = new Libro(
    "1234567890",
    "El Señor de los Anillos",
    "J.R.R. Tolkien",
    1216,
);

const libro2 = new Libro("0987654321", "El Código da Vinci", "Dan Brow", 656);

export const ejercicio2 = (): void => {
    console.log(libro1.toString());
    console.log(libro2.toString());

    if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
        console.log(
            `El libro ${libro1.getTitulo()} con un total de ${libro1.getNumPaginas()}, tiene más páginas que el libro ${libro2.getTitulo()} con un total de ${libro2.getNumPaginas()}.`,
        );
    } else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
        console.log(
            `El libro ${libro2.getTitulo()} con un total de ${libro2.getNumPaginas()}, tiene más páginas que el libro ${libro1.getTitulo()} con un total de ${libro1.getNumPaginas()}.`,
        );
    } else {
        console.log(`Ambos libros tienen la misma cantidad de páginas las cuales son con un total de ${libro1.getNumPaginas()}.`);
    }
};
