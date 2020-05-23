const express = require("express");
const router = express.Router();
const PokemonController = require('../controller/pokemon');

router.get('/',PokemonController.findAll);

module.exports = router;