
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.string('navstate');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropColumn('navstate');
    })
};
