
exports.up = function(knex) {
  return knex.schema
    .createTable('nav-click', function (table) {
      table.increments('id');
      table.string('state');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('nav-click')
};
