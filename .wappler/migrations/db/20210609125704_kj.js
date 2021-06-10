
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropColumn('test');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.integer('test');
    })
};
