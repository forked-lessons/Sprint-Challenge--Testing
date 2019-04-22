const express = require('express');

const db = require('./data/helpers');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ errorMessage: 'here come the games' });
});

server.get('/games', async (req, res) => {
  list = await db.getList();
  res.status(200).json(list);
});

server.post('/games/add-game', (req, res) => {
  try {
    const newGame = req.body;
    if (newGame.title && newGame.genre) {
      db.addGame(newGame);
      res.status(201).json(newWord);
    } else {
      res.status(422).json({ errorMessage: 'Please add a title and genre' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});
module.exports = server;
