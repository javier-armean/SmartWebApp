
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.text('value').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.integer('value').alter();
    })
};
