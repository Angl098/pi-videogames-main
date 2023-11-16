const { Videogame } = require('../db');
const { Genres } = require('../db');
// const postGameHandler = require('../handlers/postGameHandler');
// /post => body //por body recibo informacion 

const postGame = async (name, description, platform, image, release, rating, genres ) => {
    const game = {name, description, platform, image, release, rating, createdInDb: true};
    // const arrayGenres = genres.map(ele => Number(ele));
    const arrayGenres = Object.values(genres).map(ele => Number(ele));
    
    let videoCreated = await Videogame.create(game);

    const genreDb = await Genres.findAll({ where: {id: arrayGenres}});

    videoCreated.addGenres(genreDb);
};


module.exports = postGame;


// const newGame = await Videogame.create({name, description, platform, image, release, rating });
// await newGame.addGenres(genreId);

// return newGame;