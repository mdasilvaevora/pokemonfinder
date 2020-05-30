process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Pokemons', () => {
    
    describe('/GET pokemons', () => {
        it('it should not get pokemons given an empty query', (done) => {
            chai.request(server)
                .get('/api/pokemon')
                .end((end,res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('pokemons');
                    res.body.pokemons.length.should.be.eql(0);
                    done();
                })
        })

    })
})
