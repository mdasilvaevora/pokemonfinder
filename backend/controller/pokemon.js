const pokeApiUrl = 'http://pokeapi.co/api/v2/pokemon/';
const axios = require('axios')
const Pokemon = require('../model/pokemon');


var Pokedex = require('pokedex-promise-v2');
var options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
}
var P = new Pokedex(options);

module.exports = {
    find: function(req,res) {
        
        P.getPokemonsList()
            .then(result => {
                console.log(result)
                res.send({ pokemons: result })
            })
            .catch( err => {
                console.log(err)
                res.status(500).json({ error: 'Server error fetching pokemons'})
            })
    }
}