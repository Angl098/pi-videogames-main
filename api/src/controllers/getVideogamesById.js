const { Videogame, Genres } = require('../db');
const axios = require('axios'); 
const { API_KEY } = process.env;


// const cleanArray = (arr) => {
//     const arrayToClean = Array.isArray(arr) ? arr : [arr];
//     // console.log(arr);
//     return arrayToClean.map((elem) => {
//         return {
//             id: elem.id,
//             name: elem.name,
//             description: elem.description,
//             platform: elem.platform,
//             image: elem.background_image,
//             release: elem.release,
//             rating: elem.rating,
//             // created: false,
//             genres: elem.genres,
//         };
//     });
// };

const getVideogamesById = async (id, source) => {
    
    const gameById = async () => {
        return source === "api"
        ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data 
        : await Videogame.findByPk(id);
    };

    const element = await gameById();
    const platforms = element.platforms.map((platformInfo) => platformInfo.platform.name);

    const gameData = {
        id: element.id,
        name: element.name,
        description: element.description,
        platform: platforms.length > 1 ? platforms : platforms[0],
        image: element.background_image,
        released: element.released,
        rating: element.rating,
        createdInDb: false,
        Genres: element.genres.map(ele => ele.name),
    };

    return [gameData];
};

module.exports = getVideogamesById;

// const gameById = async () => {
//     source === "api"
// ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data 
// : await Videogame.findByPk(id);
// }

// `https://api.rawg.io/api/games?key=${API_KEY}&id=${id}`

// const URL = 'https://api.rawg.io/api/games?key=e33bf2ed4a294a25a26512b001176f4e'
// const URL = `https://api.rawg.io/?api_key=${API_KEY}`
// /:id => params 
// "https://api.rawg.io/api/games/${id}" 
// https://api.rawg.io/api/games?key=${API_KEY}&id=${id}
// https://api.rawg.io/api/games?key=e33bf2ed4a294a25a26512b001176f4e/${id}
//  try {
    //     if (source === "api") {
    //         const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&id=${id}`);
    //         return response.data;
    //     } else if (source === "bdd") {
    //         const game = await Videogame.findByPk(id);
    //         return game;
    //     } else {
    //         throw new Error("Invalid source");
    //     }
    // } catch (error) {
    //     // Manejar errores aquí
    //     console.error(`Error in getVideogamesById: ${error.message}`);
    //     throw error;
    // }

    // filtrado :
    // videogameData = {
    //     id: data.id,
    //     name: data.name,
    //     description: data.description,
    //     plataformas: data.platforms.map((nombre) => {
    //       return nombre.platform.name;
    //     }),
    //     imagen: data.background_image,
    //     lanzamiento: data.released,
    //     rating: data.rating,
    //     genres: data.genres.map((gen) => {
    //       return gen.name;
    //     }),
    //   };