const { Videogame, Genres } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios'); 
// esta ruta obtiene los primeros 15 videojuegos que se encuentren con la palabra recibida por query
//independientemente de mayus o minus


const getVideogamesByName = async (name) => {
    const buscados = await axios.get(`https://api.rawg.io/api/games?search=${name}key=${API_KEY}`);

    try {
        const juegosApi = await buscados.data.results.map(element => {
            return {
                id: element.id,
                name: element.name,
                description: element.description,
                image: element.background_image,
                released: element.released,
                rating: element.rating,
                createdInDb: 'false',
                Genres: element.genres.map(element => element.name),
                Platforms: element.platforms.map(ele => ele.platform.name),
            }});

    // const juegosDatabase = await Videogame.findAll({
    //     include: [{
    //         model: Genres,
    //         attributes: ['name'],
    //         through: { attributes: [],},
    //     }]});

    // const juegosBD = juegosDatabase.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    // const juegos = juegosApi.concat(juegosBD)

    return juegosApi;
    // res.status(200).json(juegos);
    } catch (error) {
        // console.log(error)
        res.status(400).json({error: error.message});
    }
};

module.exports = getVideogamesByName; 


// const apiVideogameRaw = (
    //     await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    //     ).data;

    // const apiVideogames = cleanArray(apiVideogameRaw);

    // return [...apiVideogames, ...databaseVideogame];

// cleanArray = (arr) => {
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