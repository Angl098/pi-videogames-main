// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');

// const getGenres = require('../controllers/getGenres');
const getGenresHandler =require('../handlers/getGenresHandler');
// const getVideogames = require('../controllers/getVideogames');
const getVideogamesHandler = require('../handlers/getVideogamesHandler');
// const getVideogamesById = require('../controllers/getVideogamesById');
const gameByIdHandler = require('../handlers/gameByIdHandler');
// const getVideogamesByName = require('../controllers/getVideogamesByName');
const gameByNameHandler = require('../handlers/gameByNameHandler');
// const postGame = require('../controllers/postGame');
const postGameHandler = require('../handlers/postGameHandler');

const router = Router();

// const validate = (req, res, next) => {
//     const {name, description, platform, image, release, rating, genreId} = req.body;
//     if(!name || !description || !platform || !image || !release || !rating || !genreId)
//     return res.status(400).json({ error: "Missing data"});
//     next();
// };

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", getVideogamesHandler); // un arrelo de objs con todos los videojuegos 
router.get("/videogames/:id", gameByIdHandler); // buscar el detalle de un juego por id
router.get("/videogames", gameByNameHandler); // buscar los juegos x el nombre
router.post("/videogames", postGameHandler); // crear un juego
router.get("/genres", getGenresHandler); // obtiene todos los generos de la api


module.exports = router;
