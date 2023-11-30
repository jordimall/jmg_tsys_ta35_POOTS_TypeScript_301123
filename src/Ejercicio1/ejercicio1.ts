import { Serie } from "./model/Serie";
import { Videojuego } from "./model/Videojuego";

const series: Serie[] = [
    new Serie("Breaking Bad", "Vince Gilligan"),
    new Serie("Los Soprano", "David Chase"),
    new Serie("Game of Thrones", "David Benioff y D. B. Weiss"),
    new Serie("The Witcher", "Lauren Schmidt Hissrich"),
    new Serie("Black Mirror", "Charlie Brooker"),
];

const videojuegos: Videojuego[] = [
    new Videojuego("Persona 5 Royal", 100, "Rol", "Atlus"),
    new Videojuego("Cyberpunk 2077", 40, "RPG", "CD Projekt"),
    new Videojuego(
        "Assassin's Creed Valhalla",
        30,
        "Acción-Aventura",
        "Ubisoft",
    ),
    new Videojuego("The Elder Scrolls V: Skyrim", 15, "RPG", "CD Projekt RED"),
    new Videojuego(
        "Red Dead Redemption 2",
        50,
        "Acción-Aventura",
        "Rockstar Games",
    ),
];

series[1].entregar();
series[4].entregar();
videojuegos[4].entregar();
videojuegos[0].entregar();

export const ejercicio1 = (): void => {
    const seriesEntregadas = series.filter(serie => serie.isEntregado());
    const videojuegosEntregados = videojuegos.filter(videojuego =>
        videojuego.isEntregado(),
    );

    console.log(`Las series entregadas son: ${seriesEntregadas.length}`);
    console.log(`Los videojuegos entregados son: ${videojuegosEntregados.length}`);

    const videojuegoMasHoras = videojuegos.reduce((prev, current) =>
        prev.getHorasEstimadas() > current.getHorasEstimadas() ? prev : current,
    );

    console.log(
        `Videojuego con más horas estimadas:\n${videojuegoMasHoras.toString()}`,
    );

    const serieMasTemporadas = series.reduce((prev, current) =>
        prev.getNumTemporadas() > current.getNumTemporadas() ? prev : current,
    );

    console.log(`Serie con más temporadas:\n${serieMasTemporadas.toString()}`);
};
