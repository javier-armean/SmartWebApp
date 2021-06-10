
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.integer('value');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropColumn('value');
    })
};
