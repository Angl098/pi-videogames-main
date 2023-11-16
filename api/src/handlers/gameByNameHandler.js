const getVideogames = require('../controllers/getVideogames');
const getVideogamesByName = require('../controllers/getVideogamesByName');

const gameByNameHandler = async (req, res) => {
    const { name } = req.query;
    // const obj = req.query;
    try {
        const resultado = await getVideogamesByName(name);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = gameByNameHandler;

// const resultado = name ? await getVideogamesByName(name) : await getVideogames();
// if(name) {
    //     res.send(`Quiero buscar todos los que se llamen ${name}`)
    // } else {
    //     res.send('Quiero enviar todos los usuarios')
    // }