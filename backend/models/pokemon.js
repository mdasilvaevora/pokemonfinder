class Pokemon{
    constructor(pokemon){
        this.id= pokemon.id,
        this.name= pokemon.name,
        this.baseExperience= pokemon.base_experience,
        this.height= pokemon.height,
        this.weight= pokemon.weight
    }
}

module.exports = Pokemon;