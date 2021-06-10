
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropColumn('state');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.string('state', 255);
    })
};
