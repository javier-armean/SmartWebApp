
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.integer('navstate').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.string('navstate', 255).alter();
    })
};
