exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', eachGame => {
    eachGame.increments();
    eachGame
      .string('title')
      .notNullable()
      .unique();
    eachGame.string('genre').notNullable();
    eachGame.integer('releaseYear').notNullable;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
