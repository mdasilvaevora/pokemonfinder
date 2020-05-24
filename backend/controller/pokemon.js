const PokemonService = require('../service/pokemon');

module.exports = {
    find: async function(req,res) {
        const pokemons = await PokemonService.getPokemons(req.query)
        res.send({ pokemons: pokemons })     
    }
}