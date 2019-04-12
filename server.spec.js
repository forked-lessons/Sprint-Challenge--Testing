const request = require('supertest');
const server = require('./server');

describe('the route handlers', () => {
  describe('get request', () => {
    it('it exists', () => {
      request(server)
        .get('/games')
        .then(res => {
          expect(res).toBeTruthy();
        })
        .catch(err => {
          console.log(err);
        });
    });
    it('responds with 200 status', () => {
      request(server)
        .get('/games')
        .then(res => {
          expect(res.status).toBe(200);
        })
        .catch(err => {
          console.log(err);
        });
    });
    it('return json', () => {
      request(server)
        .get('/games')
        .then(res => {
          expect(response.type).toMatch(/json/i);
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
  describe('post request', () => {
    const body = {
      title: 'tetris',
      genre: 'arcade',
      releaseYear: 1894
    };
    it('it exists', () => {
      request(server)
        .post('/games/add-game')
        .send(body)
        .then(res => {
          expect(res).toBeTruthy;
        })
        .catch(err => {
          console.log(err);
          console.log('post request failure');
        });
    });
    it('responds with 201', () => {
      request(server)
        .post('/games/add-game')
        .send(body)
        .then(res => {
          expect(res.status).toBe(201);
        })
        .catch(err => {
          console.log(err);
        });
    });
    it('responds with error code with wrong body request', () => {
      const wrongBody = {};
      request(server)
        .post('/games/add-game')
        .send(wrongBody)
        .then(res => {
          expect(res.status).not.toBe(201);
        })
        .catch(err => {
          console.log(err);
          console.log('post request failure');
        });
    });
  });
});
