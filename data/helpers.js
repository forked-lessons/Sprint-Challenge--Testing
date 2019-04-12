const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);
module.exports = {
  getList,
  addGame
};
function getList() {
  return db('games');
}

function addGame(game) {
  return db('games')
    .insert(game)
    .then(ids => {
      id: ids[0];
    });
}
