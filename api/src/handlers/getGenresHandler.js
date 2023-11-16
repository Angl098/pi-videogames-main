const getGenres = require("../controllers/getGenres");

const getGenresHandler = async (req, res) => {
    try {
        const { generos } = req.body;
        const newGenre = await getGenres(generos);
        res.status(200).json(newGenre);
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = getGenresHandler;
