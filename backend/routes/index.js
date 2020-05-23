const router = require("express").Router();
const PokemonRoutes = require('./pokemon');

router.use('/api/pokemons',PokemonRoutes);

module.exports = router;
