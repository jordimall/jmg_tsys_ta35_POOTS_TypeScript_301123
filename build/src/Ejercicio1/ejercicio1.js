"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicio1 = void 0;
const Serie_1 = require("./model/Serie");
const Videojuego_1 = require("./model/Videojuego");
const series = [
    new Serie_1.Serie("Breaking Bad", "Vince Gilligan"),
    new Serie_1.Serie("Los Soprano", "David Chase"),
    new Serie_1.Serie("Game of Thrones", "David Benioff y D. B. Weiss"),
    new Serie_1.Serie("The Witcher", "Lauren Schmidt Hissrich"),
    new Serie_1.Serie("Black Mirror", "Charlie Brooker"),
];
const videojuegos = [
    new Videojuego_1.Videojuego("Persona 5 Royal", 100, "Rol", "Atlus"),
    new Videojuego_1.Videojuego("Cyberpunk 2077", 40, "RPG", "CD Projekt"),
    new Videojuego_1.Videojuego("Assassin's Creed Valhalla", 30, "Acción-Aventura", "Ubisoft"),
    new Videojuego_1.Videojuego("The Elder Scrolls V: Skyrim", 15, "RPG", "CD Projekt RED"),
    new Videojuego_1.Videojuego("Red Dead Redemption 2", 50, "Acción-Aventura", "Rockstar Games"),
];
series[1].entregar();
series[4].entregar();
videojuegos[4].entregar();
videojuegos[0].entregar();
const ejercicio1 = () => {
    const seriesEntregadas = series.filter(serie => serie.isEntregado());
    const videojuegosEntregados = videojuegos.filter(videojuego => videojuego.isEntregado());
    console.log(`Las series entregadas son: ${seriesEntregadas.length}`);
    console.log(`Los videojuegos entregados son: ${videojuegosEntregados.length}`);
    const videojuegoMasHoras = videojuegos.reduce((prev, current) => prev.getHorasEstimadas() > current.getHorasEstimadas() ? prev : current);
    console.log(`Videojuego con más horas estimadas:\n${videojuegoMasHoras.toString()}`);
    const serieMasTemporadas = series.reduce((prev, current) => prev.getNumTemporadas() > current.getNumTemporadas() ? prev : current);
    console.log(`Serie con más temporadas:\n${serieMasTemporadas.toString()}`);
};
exports.ejercicio1 = ejercicio1;
