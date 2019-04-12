const express = require('express');

const db = require('./data/helpers');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'here come the games' });
});

server.get('/games', async (req, res) => {
  list = await db.getList();
  res.status(200).json(list);
});

server.post('/games/add-game', (req, res) => {
  try {
    const newGame = req.body;
    db.addGame(newGame);
    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
module.exports = server;
