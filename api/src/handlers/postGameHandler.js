const postGame = require("../controllers/postGame");

const postGameHandler = async (req, res) => {
    try {
        const { name, description, platform, image, release, rating, genres } = req.body;
        const newVideogame = await postGame(name, description, platform, image, release, rating, genres);
        res.status(201).json(newVideogame);
    } catch (error) {
        // if(!name || !description || !platforms || !image || !released || !rating || !genres) {
        //     return res.status(404).json({message: "Datos Incompletos"});
        // };
        res.status(400).json({ error: error.message });
    }
};
module.exports = postGameHandler;