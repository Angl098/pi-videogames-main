const { Genres } = require('../db')
const { API_KEY } = process.env;
const axios = require('axios');

const getGenres = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    const juegos = await response.data.results;

    // crear un conjunto para almacenar gneros únicos
    const generosUnicos = new Set();

    // iterar sobre cada juego y agregar sus generos al conjunto
    juegos.forEach((juego) => {
        if (juego.genres) {
            juego.genres.forEach((genero) => {
                generosUnicos.add(genero.name);
            });
        }
    });

    // convertir el conjunto a un arreglo
    const generos = Array.from(generosUnicos);

        // guarda cada genero en la bdd
    for (const nombreGenero of generos) {
        // if (nombreGenero) { // asegurar de que nombreGenero no sea nulo
            await Genres.create({ name: nombreGenero });
        // }
    };

    // imprimir la lista de generos
    console.log('Lista de géneros:', generos);

    return generos;
};

module.exports = getGenres;
