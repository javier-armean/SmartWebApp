
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('state', 'value');
      table.integer('value').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('value', 'state');
      table.string('state', 255).alter();
    })
};
