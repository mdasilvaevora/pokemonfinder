const Pokemon = require('../models/pokemon');

var Pokedex = require('pokedex-promise-v2');
var options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
}
var P = new Pokedex(options);

async function adaptPokemons (pokemons) {
    var pokemonFetch;
    return await Promise.all(pokemons.map(async pokemon => {
        pokemonFetch = await P.resource(pokemon.url)
        return new Pokemon(pokemonFetch)
    }))
}

function filterPokemons(pokemons, query) {
    const name = query.name;

    if(Object.keys(query).length === 0 ){
        return pokemons;
    }

    const regexp = new RegExp(name,'i');
    const length = name.length
    return pokemons.filter(pokemon => regexp.test(pokemon.name.slice(0,length)))
}

module.exports = {
    getPokemons: async function(query){
        var emptyQuery = Object.keys(query).length === 0;
        var emptyPokemons = [];
        if(emptyQuery) return emptyPokemons;

        var pokemonsFetch = await P.getPokemonsList();
        var filteredPokemons = filterPokemons(pokemonsFetch.results,query)
        var adaptedPokemons = await adaptPokemons(filteredPokemons);
        
        return adaptedPokemons;
        }
}