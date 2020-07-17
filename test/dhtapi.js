const chai = require('chai');
const request = require('supertest');
const app = require('../src/config/server/server').default;
const Dht11Model = require('../src/components/Dht11/model').default;
chai.should();

/**
 * API tests
 */
describe('API', () => {
    it('get all dhts', (done) => {
        request(app)
            .get('/v1/dhts')
            .set('x-access-token', global.token)
            .expect((res) => {
                res.status.should.equal(200);
                res.body.should.be.an('array');
            })
            .end(done);
    });

    it('create new dht', (done) => {
        const newDht = {
            temperature: '25 c',
            humidity: '75'
        };

        request(app)
            .post('/v1/dhts')
            .send(newDht)
            .set('x-access-token', global.token)
            .expect((res) => {
                res.status.should.equal(201);
                res.body.should.have.property('temperature').eql('25 c');
                res.body.should.have.property('humidity').eql('75');
            })
            .end(done);
    });
});

/**
 * clear database after tests
 */
after(async () => {
    try {
        await Dht11Model.collection.drop();
    } catch (error) {
        console.log('Something went wrong after tests, seems your database doesnt cleaned');
    }
});
