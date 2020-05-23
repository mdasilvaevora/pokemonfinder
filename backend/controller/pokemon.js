module.exports = {
    findAll: function(req,res) {
        console.log('do something');
        res.send({ pokemons: [] });
    }
}