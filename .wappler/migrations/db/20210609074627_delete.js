
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropColumn('value');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.text('value', 65535);
    })
};
