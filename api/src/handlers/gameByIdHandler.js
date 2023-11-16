const getVideogamesById = require("../controllers/getVideogamesById");

const gameByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {   
        const gameById = await getVideogamesById(id, source);
        res.status(200).json(gameById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = gameByIdHandler;