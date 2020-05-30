const PokemonService = require('../service/pokemon');

module.exports = {
    find: async function(req,res) {
        PokemonService.getPokemons(req.query)
                        .then(pokemons => {
                           res.send({ pokemons: pokemons })
                        })
                        .catch(err => {
                            res.status(500).json({errors: err.message});
                        })    
    }
}