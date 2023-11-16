const { Videogame, Genres } = require('../db')
const { API_KEY } = process.env;
const axios = require('axios'); 

// FUNC TEMPORAL de map registros de la api 
// const cleanArray = (arr) => {
//     const arrayToClean = Array.isArray(arr) ? arr : [arr];
//     return arrayToClean.map((elem) => {
//         return {
//             id: elem.id,
//             name: elem.name,
//             description: elem.description,
//             platform: elem.platform,
//             image: elem.background_image,
//             release: elem.release,
//             rating: elem.rating,
//             created: false,
//             genres: elem.genres,
//         };
//     });
// };
// const apiVideogames = cleanArray(apiVideogamesRaw)

const getVideogames = async () => {
    const databaseVideogames = await Videogame.findAll(
        { include: 
            {
                model: Genres,
                attributes: ['name'],
                through: { attributes: [] },
            }
        });

    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results;
    //map de los registros que vienen de la Api
    const gamesApi = await apiVideogamesRaw.map(element => {
        const platforms = element.platforms.map((platformInfo) => platformInfo.platform.name);
        return {
            id: element.id,
            name: element.name,
            description: element.description,
            platform: platforms.length > 1 ? platforms : platforms[0],
            image: element.background_image,
            released: element.released,
            rating: element.rating,
            createdInDb: false,
            Genres: element.genres.map(ele => ele.name),
        }
        });
    

    const resultado = [...databaseVideogames, ...gamesApi];

    return resultado;
};

module.exports = getVideogames;