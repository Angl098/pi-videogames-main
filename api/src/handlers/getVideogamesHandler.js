const getVideogames = require('../controllers/getVideogames');
const getVideogamesByName = require('../controllers/getVideogamesByName');

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;
try {
    const resultado = name ? getVideogamesByName(name) : await getVideogames();
    res.status(200).json(resultado);
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

module.exports = getVideogamesHandler;