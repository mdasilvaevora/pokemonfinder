const router = require("express").Router();
const PokemonRoutes = require('./pokemon');

router.use('/api/pokemon',PokemonRoutes);

module.exports = router;
