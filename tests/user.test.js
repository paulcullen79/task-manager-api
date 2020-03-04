const request = require('supertest')
const app = require('../src/app')

test ('should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Bob',
        email: 'cullenpaul79@hotmail.com',
        password: 'mypassword123'
    }).expect(201)

})