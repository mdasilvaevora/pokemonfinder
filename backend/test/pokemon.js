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
        
        it('it should get adapted pokemons given a query',(done) => {
            chai.request(server)
                .get('/api/pokemon/?name=bul')
                .end((end,res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('pokemons');
                    res.body.pokemons[0].should.have.property('name')
                    res.body.pokemons[0].should.have.property('id')
                    res.body.pokemons[0].should.have.property('baseExperience')
                    res.body.pokemons[0].should.have.property('height')
                    res.body.pokemons[0].should.have.property('weight')
                    done();
                })
        })

        it('it should search by partial names',(done) => {
            const search = 'bu'
            chai.request(server)
                .get(`/api/pokemon/?name=${search}`)
                .end((end,res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('pokemons');
                    res.body.pokemons[0].name.slice(0,2).should.be.eql(search)
                    res.body.pokemons[res.body.pokemons.length - 1].name.slice(0,2).should.be.eql(search)
                    done();
                })
        })

    })
})
