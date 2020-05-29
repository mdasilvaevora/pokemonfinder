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
        return {
            id: pokemonFetch.id,
            name: pokemonFetch.name,
            baseExperience: pokemonFetch.base_experience,
            height: pokemonFetch.height,
            weight: pokemonFetch.weight
        }
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
        var pokemonsFetch = await P.getPokemonsList()
        var pokemons = pokemonsFetch.results;
        var filteredPokemons = filterPokemons(pokemons,query)
        var adaptedPokemons = await adaptPokemons(filteredPokemons);
        return adaptedPokemons;
        }
}